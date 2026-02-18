import axios from "axios";

const API = axios.create({
  baseURL: "https://Appson28.pythonanywhere.com",
  withCredentials: true,
});

// --- CSRF support ---
// Django default cookie name: csrftoken
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

API.interceptors.request.use((config) => {
  // Only needed for unsafe methods
  const method = (config.method || "").toLowerCase();
  if (["post", "put", "patch", "delete"].includes(method)) {
    const csrf = getCookie("csrftoken");
    if (csrf) config.headers["X-CSRFToken"] = csrf;
  }
  return config;
});

// --- Refresh queue (prevents infinite loops + race conditions) ---
let isRefreshing = false;
let pendingRequests = [];

function processQueue(error) {
  pendingRequests.forEach((p) => (error ? p.reject(error) : p.resolve()));
  pendingRequests = [];
}

API.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config;

    if (err.response?.status === 401 && !original._retry) {
      original._retry = true;

      if (isRefreshing) {
        // wait until refresh completes
        return new Promise((resolve, reject) => {
          pendingRequests.push({
            resolve: () => resolve(API(original)),
            reject,
          });
        });
      }

      isRefreshing = true;

      try {
        await API.post("/api/token/refresh/");
        processQueue(null);
        return API(original);
      } catch (refreshErr) {
        processQueue(refreshErr);
        return Promise.reject(refreshErr);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(err);
  }
);

export default API;
