import { Link } from "react-router-dom";
import {useAuth } from "../context/AuthContext";
import { useContext, useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import  CartContext  from "../context/CartContext.jsx";

function Login() {
  /*
  const { LoginUser, loading, islogin } = useContext(AuthContext);

  const { fetchProduct } = useContext(CartContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await LoginUser(username, password);
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error("Login error:", err);
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    if (islogin) {
      navigate("/");
    }
  }, [islogin, navigate]);
  */

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // If user is already logged in, redirect away from login


  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(username, password); // calls POST /api/login/ then GET /api/me/
      navigate(from, { replace: true });
    } catch (err) {
      const msg =
        err?.response?.data?.detail ||
        err?.response?.data?.non_field_errors?.[0] ||
        "Invalid username or password";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container flex justify-center w-full text-white">
      <form className="col-4 m-3 " onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <div className="h-[60px] w-[60px] bg-white mb-3 rounded-full text-5xl text-black flex justify-center items-center">
            <FaRegUser />
          </div>
        </div>
        <div className="flex justify-center  text-black">
          <h1 className="flex justify-center text-4xl font-bold">Login</h1>
        </div>
        <div className="mb-3">
          <div className="mb-1">
            <label htmlFor="">Username</label>
          </div>
          <div>
            <input
              className="col-12 rounded border w-full text-black "
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="mb-1">
            <label htmlFor="">Password</label>
          </div>
          <div>
            <input
              className="col-12 rounded border text-black"
              type="password"
              autoComplete="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className=" flex justify-center items-center w-full rounded bg-blue-500  mb-3"
          type="submit"
        >
          {loading ? <BiLoaderAlt className="animate-spin" /> : ""}
          Login...
        </button>
        <div className="flex justify-between">
          <Link to="/register" className=" hover:text-blue-200 hover:underline">
            Create account
          </Link>
          <Link to="/register" className=" hover:text-blue-200 hover:underline">
            Reset password
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
