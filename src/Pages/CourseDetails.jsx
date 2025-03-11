import React from "react";

const CourseDetails = () => {
  return (
    <section className="py-16 px-6 text-center bg-gray-100">
      <h2 className="text-3xl font-bold">
        Course Details
        <span className="block w-32 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h2>
      <p className="text-gray-600 max-w-4xl mx-auto mt-4">
        Our courses cover a wide range of topics, including Web Development, Digital Marketing, Data Science, and more.
      </p>
      <div className="mt-8">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default CourseDetails;
