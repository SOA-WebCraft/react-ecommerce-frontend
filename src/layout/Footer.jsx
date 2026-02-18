import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">ShopHub</h3>
            <p className="text-sm text-gray-400 mb-4">
              Your one-stop destination for premium products at affordable prices.
              Quality you can trust, service you can rely on.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-md font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories/electronics" className="text-gray-400 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/categories/clothing" className="text-gray-400 hover:text-white transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/categories/home" className="text-gray-400 hover:text-white transition-colors">
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link to="/categories/sports" className="text-gray-400 hover:text-white transition-colors">
                  Sports
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-md font-semibold text-white mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-gray-400 hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-md font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-primary-500"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-md text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 ShopHub. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;