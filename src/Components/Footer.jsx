import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        
        {/* Brand Name */}
        <h2 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          EDUCATION
        </h2>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm uppercase font-semibold">
          {["Home", "Courses", "About", "Contact"].map((item, index) => (
            <li key={index}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-green-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
            <a 
              key={index} 
              href="#" 
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-green-500 transition-all duration-300"
            >
              <Icon className="text-white text-lg" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} EDUCATION. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
