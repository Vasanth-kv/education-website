import React from "react";

const Newsletter = () => {
  return (
    <div className="relative bg-black py-10">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 object-cover bg-center"
        style={{
          backgroundImage: "url('src/assets/img/N3.avif')",
          opacity: 0.3, // Adjust transparency
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          Subscribe to our newsletter
        </h2>
        <div className="flex flex-1 items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-12 px-6 py-2 text-black border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-r-md whitespace-nowrap">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
