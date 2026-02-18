/*

import { createContext, useEffect, useState } from "react";
//import api from "../../api";

import axios from "axios";
import { toast } from "react-toastify";
//import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [islogin, setIslogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const LoginUser = async (username, password) => {
    setIslogin(false);
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/users/login/", {
        username,
        password,
      });
      if (res.status === 200) {
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);
        setIslogin(true);
        toast.success("Login successfull");
      }
    } catch (error) {
      setIslogin(false);
    } finally {
      setLoading(false);
    }
  };

  const Users = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/users/register/");
      setUsers(res.data);
      console.log(res.data);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIslogin(false);
    Users();
  }, []);

  const contextData = {
    LoginUser,
    islogin,
    setIslogin,
    loading,
    setLoading,
    users,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};*/

import { createContext, useContext, useState , useEffect} from "react";
import API from "../lib/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username, password) => {
      await API.post("/api/users/login/", { username, password });
      setIsAuthenticated(true);
    };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/api/test/");
         await API.get("/api/csrf/",)
        if (res.status === 200) {
          console.log(res.data);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log(error.message);
        setIsAuthenticated(false)
        //toast.success(error.message);
      }
    };

    fetchData();
  }, []);

  const logout = async () => {
    await API.post("/api/users/logout/");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

