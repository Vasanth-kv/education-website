import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  { name: "Alice Brown", role: "CEO Smart Edu", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "src/assets/img/TM1.webp" },
  { name: "Rebecca White", role: "Marketing Manager", feedback: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.", image: "src/assets/img/TM2.avif" },
  { name: "Sophia Miller", role: "Software Engineer", feedback: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.", image: "src/assets/img/TM3.avif" },
  { name: "Emma Wilson", role: "UX Designer", feedback: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.", image: "src/assets/img/TM4.webp" },
  { name: "John Doe", role: "Product Manager", feedback: "Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", image: "src/assets/img/TM5.avif" },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 text-center bg-gray-100 max-w-full mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        What Our Clients Say
        <span className="block w-60 h-1 bg-blue-500 mx-auto mt-1 rounded-full"></span>
      </h2>

      <div className="relative bg-white h-64 shadow-lg mx-16 p-6 max-w-8xl rounded-lg">
        {/* Client Image */}
        <div className="flex justify-center mb-4">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-24 h-24 rounded-full border-4 border-gray-300 object-cover"
          />
        </div>

        {/* Feedback */}
        <p className="text-gray-700 italic mb-4">"{testimonials[currentIndex].feedback}"</p>

        {/* Name & Role */}
        <h3 className="text-lg font-semibold">{testimonials[currentIndex].name}</h3>
        <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-1/2 left-4">
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
            }
            className="text-gray-600 hover:text-black"
          >
            <FaChevronLeft size={20} />
          </button>
        </div>

        <div className="absolute inset-y-1/2 right-4">
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
            }
            className="text-gray-600 hover:text-black"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Clickable Images */}
      <div className="flex justify-center mt-6 space-x-4">
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.image}
            alt={testimonial.name}
            className={`w-20 h-20 rounded-full cursor-pointer border-2 object-cover ${
              index === currentIndex ? "border-black" : "border-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
