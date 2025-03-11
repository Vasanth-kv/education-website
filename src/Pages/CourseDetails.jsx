import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

// Course Data
const courseDetails = {
  "web-design": {
    title: "Web Design",
    description: "Learn how to design stunning websites with modern UI/UX principles.",
    teacher: "Rosie Rottman",
    time: "3 PM",
    duration: "8 Weeks",
    image: "/src/assets/img/CD1.avif"
  },
  "photography": {
    title: "Photography",
    description: "Master the art of photography with expert guidance.",
    teacher: "Floyd Fukuda",
    time: "6 PM",
    duration: "6 Weeks",
    image: "/src/assets/img/CD2.avif"
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Discover the secrets of online marketing and brand growth.",
    teacher: "Elena Cully",
    time: "10 AM",
    duration: "10 Weeks",
    image: "/src/assets/img/CD3.avif"
  },
  "graphic-design": {
    title: "Graphic Design",
    description: "Unleash creativity with industry-standard tools and techniques.",
    teacher: "Liam Peterson",
    time: "1 PM",
    duration: "12 Weeks",
    image: "/src/assets/img/CD4.avif"
  },
  "data-science": {
    title: "Data Science",
    description: "Analyze data and build predictive models with Python.",
    teacher: "Sophia Brown",
    time: "4 PM",
    duration: "14 Weeks",
    image: "/src/assets/img/CD5.avif"
  },
  "cyber-security": {
    title: "Cyber Security",
    description: "Protect networks and systems from cyber threats.",
    teacher: "David Nelson",
    time: "5 PM",
    duration: "16 Weeks",
    image: "/src/assets/img/CD6.avif"
  }
};

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courseDetails[courseId] || {
    title: "Course Not Found",
    description: "This course does not exist.",
    teacher: "N/A",
    time: "N/A",
    duration: "N/A",
    image: "/src/assets/img/placeholder.avif"
  };

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinCourse = () => {
    // Simulating course enrollment logic (You can replace this with API call)
    setIsModalOpen(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-6 py-16">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-10 text-center border border-white/20">
        
        {/* Course Image */}
        <div className="mb-6">
          <img src={course.image} alt={course.title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
        </div>

        {/* Course Title */}
        <h2 className="text-4xl font-extrabold tracking-wide mb-4 bg-gradient-to-r from-blue-400 to-green-500 text-transparent bg-clip-text">
          {course.title}
        </h2>
        
        {/* Underline Effect */}
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-6 rounded-full"></div>

        {/* Course Description */}
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {course.description}
        </p>

        {/* Additional Course Details */}
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-4 text-gray-200">
          <span className="bg-gray-800 px-4 py-2 rounded-lg shadow-md">👨‍🏫 Teacher: {course.teacher}</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg shadow-md">🕒 Time: {course.time}</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg shadow-md">📅 Duration: {course.duration}</span>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button 
            className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:bg-green-400 transition-all duration-300"
            onClick={handleJoinCourse}
          >
            Enroll Now
          </button>
          <Link 
            to="/" 
            className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-400 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Modal for Course Enrollment */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold">🎉 Enrolled Successfully!</h3>
            <p className="mt-4">You have successfully enrolled in {course.title}.</p>
            <button 
              className="mt-6 px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-400 transition"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseDetails;
