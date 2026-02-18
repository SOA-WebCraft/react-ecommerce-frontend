import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, User, Heart } from "lucide-react";
import CartContext from "../context/CartContext";
import { useContext } from "react"
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart, fetchCart  } = useContext(CartContext);
  const location = useLocation();

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const accessToken = localStorage.getItem("access")
    ? JSON.stringify(localStorage.getItem("access"))
    : null;
  
   
 

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300  ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-blue-500 text-decoration-none"
          >
            ShopHub
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-700 hover:text-primary-600 transition-colors text-decoration-none ${
                  isActive ? "text-primary-600 font-medium" : ""
                }`
              }
              end
            >
              Justice Sam
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-gray-700 hover:text-primary-600 transition-colors text-decoration-none ${
                  isActive ? "text-primary-600 font-medium" : ""
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `text-gray-700 hover:text-primary-600 transition-colors text-decoration-none ${
                  isActive ? "text-primary-600 font-medium" : ""
                }`
              }
            >
              Categories
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-700 hover:text-primary-600 transition-colors text-decoration-none ${
                  isActive ? "text-primary-600 font-medium" : ""
                }`
              }
            >
              About
            </NavLink>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex text-gray-700 hover:text-primary-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="hidden md:flex text-gray-700 hover:text-primary-600 transition-colors">
              <User size={20} />
            </button>
            <button className="hidden md:flex text-gray-700 hover:text-primary-600 transition-colors">
              <Heart size={20} />
            </button>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-primary-600 transition-colors relative"
            >
              <ShoppingCart size={20} />
              {accessToken && cart?.cart_total_quantity > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 text-white rounded-full text-xs flex items-center justify-center">
                  {cart?.cart_total_quantity}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-80 mt-4" : "max-h-0 mt-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-700 hover:text-primary-600 transition-colors ${
                  isActive ? "text-primary-600 font-medium" : ""
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-gray-700 hover:text-primary-600 transition-colors ${
                  isActive ? "text-primary-600 font-medium" : ""
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `text-gray-700 hover:text-primary-600 transition-colors ${
                  isActive ? "text-primary-600 font-medium" : ""
                }`
              }
            >
              Categories
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-700 hover:text-primary-600 transition-colors ${
                  isActive ? "text-primary-600 font-medium" : ""
                }`
              }
            >
              About
            </NavLink>
            <div className="flex space-x-4 pt-2 border-t border-gray-200">
              <button className="text-gray-700 hover:text-primary-600 transition-colors">
                <Search size={20} />
              </button>
              <button className="text-gray-700 hover:text-primary-600 transition-colors">
                <User size={20} />
              </button>
              <button className="text-gray-700 hover:text-primary-600 transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
