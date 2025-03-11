import React from "react";

const programs = [
  { title: "Engineering", description: "Learn advanced engineering concepts.", image: "src/assets/img/S1.webp" },
  { title: "Medical Sciences", description: "Explore the field of medicine.", image: "src/assets/img/S2.webp" },
  { title: "Business Management", description: "Develop leadership and management skills.", image: "src/assets/img/S3.avif" },
];

const Programs = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {programs.map((program, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            {/* Image with Green Overlay */}
            <img src={program.image} alt={program.title} className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-green-500 opacity-30 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            {/* Text on Image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
              <h3 className="text-xl font-bold">{program.title}</h3>
              <p className="text-sm">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
