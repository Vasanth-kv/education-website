import React from "react";
import { useParams } from "react-router-dom";
import { FaGlobe, FaUserGraduate, FaLaptopCode, FaVideo, FaCertificate, FaHeadset } from "react-icons/fa";

const featureData = {
  "online-testing": { title: "Online Testing", description: "Take exams online with instant results and feedback.", icon: <FaGlobe /> },
  "expert-teachers": { title: "Expert Teachers", description: "Learn from highly experienced and certified instructors.", icon: <FaUserGraduate /> },
  "flexible-learning": { title: "Flexible Learning", description: "Access courses anytime, anywhere, on any device.", icon: <FaLaptopCode /> },
  "interactive-classes": { title: "Interactive Classes", description: "Join live and recorded sessions for better engagement.", icon: <FaVideo /> },
  "certified-courses": { title: "Certified Courses", description: "Earn accredited certificates upon completion.", icon: <FaCertificate /> },
  "24-7-support": { title: "24/7 Support", description: "Get help from our support team anytime, day or night.", icon: <FaHeadset /> }
};

const FeatureDetails = () => {
  const { featureId } = useParams();
  const feature = featureData[featureId] || { title: "Feature Not Found", description: "This feature does not exist.", icon: <FaGlobe /> };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-6 py-16">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-10 text-center border border-white/20">
        
        {/* Feature Icon with Animation */}
        <div className="text-6xl bg-white/20 p-6 rounded-full inline-block mb-6 shadow-md animate-pulse">
          {feature.icon}
        </div>

        {/* Feature Title */}
        <h2 className="text-4xl font-extrabold tracking-wide mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          {feature.title}
        </h2>
        
        {/* Underline Effect */}
        <div className="w-20 h-1 bg-green-400 mx-auto mb-6 rounded-full"></div>

        {/* Feature Description */}
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {feature.description}
        </p>

        {/* Back Button */}
        <a href="/" className="mt-8 inline-block px-6 py-3 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:bg-green-400 transition-all duration-300">
          Back to Home
        </a>
      </div>
    </section>
  );
};

export default FeatureDetails;
