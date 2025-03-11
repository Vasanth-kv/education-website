import React from "react";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <section className="relative py-16 px-6 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
      
      {/* Floating Blur Elements */}
      <div className="absolute top-10 left-0 w-40 h-40 bg-blue-400 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-green-400 opacity-30 rounded-full blur-3xl"></div>

      {/* About Container */}
      <div className="max-w-4xl mx-auto p-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-xl border border-white/20">
        
        {/* Title */}
        <h2 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-green-500 text-transparent bg-clip-text">
          About Us
        </h2>

        {/* Underline */}
        <span className="block w-20 h-1 bg-blue-400 mx-auto mt-2 rounded-full"></span>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed mt-6">
          We are committed to providing top-quality education worldwide, empowering students with **hands-on learning** designed by industry professionals.
        </p>

        {/* Statistics Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-400">10K+</h3>
            <p className="text-gray-300 text-sm">Students Enrolled</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-400">500+</h3>
            <p className="text-gray-300 text-sm">Expert Teachers</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-purple-400">50+</h3>
            <p className="text-gray-300 text-sm">Certified Courses</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {/* Scroll to Courses Section */}
          <ScrollLink 
            to="courses" 
            smooth={true} 
            duration={800} 
            offset={-80} 
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full 
                      shadow-lg hover:scale-105 transition transform hover:bg-blue-600 cursor-pointer"
          >
            Explore Courses 🚀
          </ScrollLink>

          {/* Scroll to Newsletter Section */}
          <ScrollLink 
            to="newsletter" 
            smooth={true} 
            duration={800} 
            offset={-80} 
            className="px-6 py-3 bg-gray-800 text-white border border-gray-600 rounded-full 
                      shadow-lg hover:bg-gray-700 transition transform hover:scale-105 cursor-pointer"
          >
            Sign Up Now 📚
          </ScrollLink>
        </div>

      </div>
    </section>
  );
};

export default About;
