import React from "react";

const ProgramDetails = () => {
  return (
    <section className="py-16 px-6 text-center bg-gray-50">
      <h2 className="text-3xl font-bold">
        Program Details
        <span className="block w-32 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></span>
      </h2>
      <p className="text-gray-600 max-w-4xl mx-auto mt-4">
        Explore specialized programs in Engineering, Business Management, and Medical Sciences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-8">
        {["Engineering", "Business Management", "Medical Sciences"].map((program, index) => (
          <div key={index} className="p-6 bg-gray-200 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{program}</h3>
            <p className="text-sm text-gray-600">Learn from industry experts with real-world projects.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramDetails;
