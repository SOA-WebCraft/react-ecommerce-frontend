/*
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";




function useAxios() {
  const { setIslogin } = useContext(AuthContext);
  const access_token = localStorage.getItem("access");
  const refresh_token = localStorage.getItem("refresh");
  const baseUrl = "http://127.0.0.1:8000";

  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  api.interceptors.request.use(async (req) => {
    const token = localStorage.getItem("access")
      ? JSON.stringify(localStorage.getItem("access"))
      : null;
    if (token) {
      const { exp } = jwtDecode(token);
      var IsExpired = dayjs.unix(exp).diff(dayjs()) < 1;
      if (!IsExpired) {
        setIslogin(true);
        const access_token = localStorage.getItem("access");
        req.headers.Authorization = `Bearer ${access_token}`;
      } else {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/token/refresh/",
          { refresh: refresh_token }
        );
        if (res.status === 200) {
          setIslogin(true);
          localStorage.setItem("access", res.data.access);
          req.headers.Authorization = `Bearer ${res.data.access}`;
        }
      }
    } else {
      setIslogin(false);
    }

    return req;
  });

  return api;
}

export default useAxios;*/
