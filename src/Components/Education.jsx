import React from "react";
import { FaBook, FaChalkboardTeacher, FaComments } from "react-icons/fa";

const buttons = [
  { text: "Learn Anything", icon: <FaBook /> },
  { text: "Talk to Instructors", icon: <FaChalkboardTeacher /> },
  { text: "Speak with Others", icon: <FaComments /> },
];

const Education = () => {
  return (
    <section className="py-16 px-6 flex flex-col md:flex-row items-center max-w-6xl mx-auto relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-blue-300 opacity-20 blur-3xl -z-10"></div>

      {/* Left Side - Image */}
      <div className="md:w-1/2">
        <img
          src="src/assets/img/A2.avif"
          alt="Education"
          className="w-full h-auto rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Right Side - Text & Buttons */}
      <div className="md:w-1/2 text-center md:text-left md:pl-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Education
          <span className="block w-20 h-1 bg-blue-500 mx-10 mt-2 rounded-full"></span>
        </h2>
        <p className="text-gray-600 mt-3">
          Learn from experts, access study material, and get the best education.
        </p>

        <div className="flex flex-wrap justify-center md:justify-center gap-4 mt-6">
          {buttons.map(({ text, icon }, index) => (
            <button 
              key={index} 
              className="px-6 py-3 flex items-center space-x-3 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-300 shadow-md rounded-lg text-green-700 hover:bg-opacity-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-lg">{icon}</span>
              <span className="text-md font-semibold">{text}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
