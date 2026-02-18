import api from "../api";

const RefreshToken = async () => {
  const refreshToken = localStorage.getItem("refresh");
  try {
    const res = await api.post("api/token/refresh/", { refresh: refreshToken });
    if (res.status === 200) {
      localStorage.setItem("access", res.data.access);
    }
  } catch (error) {
    console.log(error);
  }
};

export default RefreshToken;
