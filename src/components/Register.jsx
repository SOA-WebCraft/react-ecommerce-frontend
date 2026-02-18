import { useState } from "react";
//import api from "../api"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { FaRegUser } from "react-icons/fa";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://Appson28.pythonanywhere.com/api/users/register/",
        { username, password }
      );
      if (res.status === 201) {
        navigate("/login");
        toast.success(`${username} has registered successfully`);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center ">
      <form className="col-4 m-3 " onSubmit={handlesubmit}>
        <div className="flex justify-center">
          <div className="h-[60px] w-[60px] bg-white mb-3 rounded-full text-5xl text-black flex justify-center items-center">
            <FaRegUser />
          </div>
        </div>
        <div className="flex justify-center">
          <h1>Register</h1>
        </div>
        <div className="mb-3">
          <div className="mb-1">
            <label htmlFor="">Username</label>
          </div>
          <div>
            <input
              className="col-12 rounded border "
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
              className="col-12 rounded border "
              type="password"
              autoComplete="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <button className="col-12 rounded bg-primary border" type="submit">
          Register
        </button>
        {loading ? "loading..." : ""}
      </form>
    </div>
  );
}

export default Register;
