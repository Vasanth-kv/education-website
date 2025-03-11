import React from "react";
import { Link } from "react-router-dom";

const programs = [
  { id: "engineering", title: "Engineering", description: "Learn advanced engineering concepts.", image: "/src/assets/img/S1.webp" },
  { id: "medical-sciences", title: "Medical Sciences", description: "Explore the field of medicine.", image: "/src/assets/img/S2.webp" },
  { id: "business-management", title: "Business Management", description: "Develop leadership and management skills.", image: "/src/assets/img/S3.avif" },
];

const Programs = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 relative inline-block">
        Our Programs
        <span className="block w-40 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {programs.map((program) => (
          <Link to={`/programs/${program.id}`} key={program.id} className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
            {/* Image with Overlay */}
            <img src={program.image} alt={program.title} className="w-full h-60 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-green-500 opacity-30 group-hover:opacity-20 transition-opacity duration-300"></div>

            {/* Program Details */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
              <h3 className="text-xl font-bold">{program.title}</h3>
              <p className="text-sm">{program.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Programs;
