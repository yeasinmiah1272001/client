import React from "react";
import { FaCodepen } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#160A3A] text-white p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-6">
        {/* Left Side: Logo Name */}
        <div className="flex items-center gap-2">
          <FaCodepen size={30} className="text-[#825FF8]" />
          <h1 className="text-2xl font-bold">CodeLearn</h1>
        </div>

        {/* Contact Information */}
        <div className="text-gray-400">
          <span className="font-semibold">CONTACT:</span>
          <span className="ml-2">hollocode@gmail.com</span>
        </div>

        {/* Middle Navigation */}
        <nav className="flex space-x-10 text-center">
          <a href="/" className="hover:text-blue-400 transition duration-300">
            Teachers
          </a>
          <a
            href="/about"
            className="hover:text-blue-400 transition duration-300"
          >
            Courses
          </a>
          <a
            href="/services"
            className="hover:text-blue-400 transition duration-300"
          >
            Scholarship
          </a>
          <a
            href="/contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Pricing
          </a>
        </nav>

        {/* Right Side: Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition duration-300"
          />
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center text-sm text-gray-500 mt-4">
        &copy; 2021 CodeLearn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
