import React, { useState } from "react";
import { Link } from "react-router-dom";

const allCourses = [
  { 
    title: "Web Design", 
    description: "Learn how to design stunning websites with modern UI/UX principles.", 
    teacher: "Rosie Rottman", 
    time: "3 PM", 
    image: "src/assets/img/C1.avif" 
  },
  { 
    title: "Photography", 
    description: "Master the art of photography with expert guidance.", 
    teacher: "Floyd Fukuda", 
    time: "6 PM", 
    image: "src/assets/img/C2.avif" 
  },
  { 
    title: "Digital Marketing", 
    description: "Discover the secrets of online marketing and brand growth.", 
    teacher: "Elena Cully", 
    time: "10 AM", 
    image: "src/assets/img/C3.avif" 
  },
  { 
    title: "Graphic Design", 
    description: "Unleash creativity with industry-standard tools and techniques.", 
    teacher: "Liam Peterson", 
    time: "1 PM", 
    image: "src/assets/img/C4.avif" 
  },
  { 
    title: "Data Science", 
    description: "Analyze data and build predictive models with Python.", 
    teacher: "Sophia Brown", 
    time: "4 PM", 
    image: "src/assets/img/C5.avif" 
  },
  { 
    title: "Cyber Security", 
    description: "Protect networks and systems from cyber threats.", 
    teacher: "David Nelson", 
    time: "5 PM", 
    image: "src/assets/img/C6.avif" 
  },
];

const Courses = () => {
  const [visibleCourses, setVisibleCourses] = useState(3);

  const handleViewAll = () => {
    setVisibleCourses(allCourses.length);
  };

  return (
    <section className="py-16 text-center px-4 md:px-12 lg:px-20">
      <h2 className="text-4xl font-bold mb-10 text-gray-800 relative inline-block">
        Courses
        <span className="block w-20 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCourses.slice(0, visibleCourses).map((course, index) => (
          <div key={index} className="bg-gray-200 shadow-xl pb-4 rounded-lg hover:shadow-2xl transition duration-300 flex flex-col border-2 border-transparent hover:border-blue-400 transform hover:-translate-y-1">
            
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-52 object-cover rounded-t-lg transition-transform transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-all"></div>
            </div>

            {/* Course Title & Description */}
            <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
            <p className="text-gray-600 text-sm">{course.description}</p>

            {/* Separators */}
            <div className="relative mt-4">
              <div className="w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full shadow-md"></div>
            </div>

            {/* Teacher & Time Section */}
            <div className="flex flex-col flex-grow justify-end m-4  p-5 bg-gray-100 rounded-lg shadow-inner">
              <p className="text-sm font-bold text-gray-700">
                <span className="bg-green-200 px-2 py-1 rounded-lg">👨‍🏫 Teacher : {course.teacher}</span>
              </p>
              <p className="text-sm font-bold text-gray-700 mt-2">
                <span className="bg-blue-200 px-2 py-1 rounded-lg">🕒 {course.time}</span>
              </p>
            </div>

            {/* Join Now Button */}
            <button 
              className="mx-5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white px-6 py-2 rounded-full max-w-4xl hover:opacity-90 transition transform hover:scale-105 shadow-md">
              <span className="absolute inset-0 bg-white opacity-10 transition-all duration-300 hover:opacity-20"></span>
              Join Now
            </button>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {visibleCourses < allCourses.length && (
        <button 
          onClick={handleViewAll} 
          className="mt-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition transform hover:scale-105 shadow-lg overflow-hidden">
          View All
        </button>
      )}
    </section>
  );
};

export default Courses;
