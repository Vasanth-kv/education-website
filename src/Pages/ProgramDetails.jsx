import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ProgramDetails = () => {
  const { programId } = useParams();

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Program data
  const programDetails = {
    "engineering": {
      title: "Engineering",
      description: "Explore cutting-edge engineering concepts and real-world applications.",
      duration: "4 Years",
      opportunities: "Work in robotics, software, civil engineering, and more.",
      image: "/src/assets/img/S1.webp"
    },
    "medical-sciences": {
      title: "Medical Sciences",
      description: "Learn about human anatomy, pharmacology, and healthcare innovation.",
      duration: "5 Years",
      opportunities: "Career in hospitals, research, and pharmaceuticals.",
      image: "/src/assets/img/S2.webp"
    },
    "business-management": {
      title: "Business Management",
      description: "Develop leadership, financial, and strategic management skills.",
      duration: "3 Years",
      opportunities: "Work in corporate leadership, startups, and finance.",
      image: "/src/assets/img/S3.avif"
    }
  };

  const program = programDetails[programId] || {
    title: "Program Not Found",
    description: "This program does not exist.",
    duration: "N/A",
    opportunities: "N/A",
    image: "/src/assets/img/placeholder.avif"
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-6 py-16">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-10 text-center border border-white/20">
        
        {/* Program Image */}
        <div className="mb-6">
          <img src={program.image} alt={program.title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
        </div>

        {/* Program Title */}
        <h2 className="text-4xl h-12 font-extrabold tracking-wide bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          {program.title}
        </h2>
        
        {/* Underline Effect */}
        <div className="w-40 h-1 bg-purple-400 mx-auto mb-2 rounded-full"></div>

        {/* Program Description */}
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {program.description}
        </p>

        {/* Additional Program Details */}
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-4 text-gray-200">
          <span className="bg-gray-800 px-4 py-2 rounded-lg shadow-md">📅 Duration: {program.duration}</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg shadow-md">🚀 Opportunities: {program.opportunities}</span>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/" 
            className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-400 transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link 
            to="/programs" 
            className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:bg-green-400 transition-all duration-300"
          >
            Explore More Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
