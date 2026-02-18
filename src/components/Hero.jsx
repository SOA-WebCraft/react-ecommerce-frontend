import React from "react";
//import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <section className="relative bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <span className="inline-block bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Summer Collection 2025
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Discover Trending{" "}
              <span className="text-primary-600">Products</span> For Your
              Lifestyle
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Shop the latest trends and discover premium quality products at
              affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Shop Now</Button>
              <Button variant="outline" size="lg">
                Explore Categories
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Hero product showcase"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Featured product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Smart Watch
                  </p>
                  <p className="text-sm text-primary-600 font-semibold">
                    $249.99
                  </p>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Featured product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Wireless Headphones
                  </p>
                  <p className="text-sm text-primary-600 font-semibold">
                    $119.99
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
