import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useContext } from "react";
//import useAxios from "../lib/useAxios";
import {useAuth} from "../context/AuthContext";
import CartContext from "../context/CartContext";
import { jwtDecode } from "jwt-decode";
import { FaBasketballBall } from "react-icons/fa";
import Layout from "../layout/Layout";
import Hero from "./Hero";
import PromoSection from "./PromoSection";
import API from "../lib/api";


function Home() {
  const navigate = useNavigate();
   const { isAuthenticated, logout } = useAuth();
  const { fetchCart } = useContext(CartContext);
 ;
  //const api = useAxios();

 // const accessToken = localStorage.getItem("access")
  //  ? JSON.stringify(localStorage.getItem("access"))
   // : null;
 // const username = accessToken ? jwtDecode(accessToken).username : "";



/*
 useEffect(()=>{
    fetchCart()
 },[])

 !accessToken && !islogin ?

  {accessToken === null && !islogin
              ? "Welcome to Django studio"
              : `Hello! ${username}`}
  {accessToken === null && !islogin ? "" : `${username[0]}`}
*/
const handleLogout = async () => {
    await logout();
  };

  const handleLogin = () => {
    navigate("/login");
  };



  return (
    <Layout>
      <Hero />
      <PromoSection />
      <nav className=" container mx-auto p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-2xl space-x-1 font-bold">
            <FaBasketballBall />
            <div>APPSON</div>
          </div>
          <div className="hidden md:flex space-x-6"></div>

          <div className="cursor-pointer">
            <div className="  relative group">
              <div className="flex justify-center  h-7 w-7 rounded-full bg-blue-500">
                
              </div>
              <div className="absolute hidden top-[50px] right-[-20px]  w-[200px] group-hover:block text-white bg-red-500 rounded before:content-[''] before:absolute before:-top-[20px] before:right-[0%] before:-translate-x-[40%] before:border-solid  before:border-red-500  before:border-b-[20px] before:border-r-[20px] before:border-l-[20px] before:border-r-transparent before:border-l-transparent before:border-t-transparent  ">
                <div className="flex flex-col divide-y leading-10">
                  <div className=" px-3  hover:bg-red-300">Profile</div>
                  <div className=" px-3  hover:bg-red-300">Settings</div>
                  
                  <div className="px-3  hover:bg-red-300">
                    {isAuthenticated ? (
                      <button onClick={handleLogout}>Logout</button>
                    ) : (
                      <button onClick={handleLogin}>Login</button>
                    ) }
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section>
        <div className="container min-h-[500px] py-[100px] text-white">
          <h1 className="text-5xl font-extrabold mb-5 text-center">
           
          </h1>
          <div className="flex justify-center">
            <Link
              to="/register"
              className="w-[120px] py-2 px-3 bg-red-500 rounded-full hover:bg-red-300 text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-primary-700 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Join Our Newsletter
                </h2>
                <p className="text-primary-100 mb-6">
                  Subscribe to our newsletter and stay updated with the latest
                  products, offers, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 flex-grow"
                  />
                  <button className="px-6 py-3 bg-white text-primary-700 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="hidden md:block h-full">
                <img
                  src="https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Newsletter banner"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
