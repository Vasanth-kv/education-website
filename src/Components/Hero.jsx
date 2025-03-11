import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "src/assets/img/E1.avif",
  "src/assets/img/E2.avif",
  "src/assets/img/E3.avif",
  "src/assets/img/E4.avif",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; // Stop auto-slide if hovered
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      className="relative h-[600px] flex items-center justify-center bg-cover bg-center transition-opacity duration-700 ease-in-out"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-4xl font-bold">Knowledge is Power</h1>
        <p className="text-lg mt-2">Any successful career starts with good education</p>
        <a href="https://www.example.com" className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300">
        Learn More
        </a>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
        className="absolute left-5 p-3 bg-gray-800 bg-opacity-50 rounded-full text-white text-2xl hover:bg-opacity-80 transition"
      >
        <FaChevronLeft />
      </button>

      <button 
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="absolute right-5 p-3 bg-gray-800 bg-opacity-50 rounded-full text-white text-2xl hover:bg-opacity-80 transition"
      >
        <FaChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 flex space-x-2">
        {images.map((_, index) => (
          <div 
            key={index} 
            className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-green-500" : "bg-gray-400"} transition`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
