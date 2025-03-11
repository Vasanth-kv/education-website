import React from "react";
import { FaGlobe, FaUserGraduate, FaLaptopCode, FaVideo, FaCertificate, FaHeadset } from "react-icons/fa";

const features = [
  { icon: <FaGlobe />, text: "Online Testing" },
  { icon: <FaUserGraduate />, text: "Expert Teachers" },
  { icon: <FaLaptopCode />, text: "Flexible Learning" },
  { icon: <FaVideo />, text: "Interactive Classes" },
  { icon: <FaCertificate />, text: "Certified Courses" },
  { icon: <FaHeadset />, text: "24/7 Support" },
];

const Features = () => {
  return (
    <section className="relative py-16 text-center bg-gray-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute -top-10 left-10 w-32 h-32 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-300 opacity-20 rounded-full blur-3xl"></div>

      {/* Title with Fancy Underline */}
      <h2 className="text-4xl font-bold mb-10 text-gray-800 relative inline-block">
        Features
        <span className="block w-20 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16">
        {features.map(({ icon, text }, index) => (
          <div 
            key={index} 
            className="relative flex flex-col items-center p-6 bg-gray-200 shadow-lg rounded-xl transition-all transform hover:-translate-y-1 hover:shadow-2xl border-2 border-transparent hover:border-blue-400 hover:bg-white"
          >
            {/* Icon with Glow Effect */}
            <div className="text-5xl text-blue-600 bg-white shadow-md rounded-full p-4 mb-4 transition-transform transform hover:scale-110">
              {icon}
            </div>
            
            {/* Text with Animation */}
            <p className="mt-2 text-lg font-semibold text-gray-800 transition-colors hover:text-blue-500">
              {text}
            </p>

            {/* Glowing Effect on Hover */}
            <div className="absolute inset-0 opacity-0 hover:opacity-20 bg-blue-500 rounded-xl transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features; 