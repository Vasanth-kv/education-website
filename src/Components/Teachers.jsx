import React, { useState, useRef, useEffect } from "react";

const teachers = [
  { 
    name: "John Doe", 
    subject: "Mathematics", 
    image: "src/assets/img/T1.webp",
    bio: "John Doe is a Mathematics professor with 10+ years of experience in teaching calculus and algebra.",
    achievements: ["Published 3 research papers", "Won National Math Olympiad", "Guest lecturer at Harvard"]
  },
  { 
    name: "Jane Smith", 
    subject: "Physics", 
    image: "src/assets/img/T2.webp",
    bio: "Jane Smith specializes in Quantum Mechanics and has worked with NASA on space research projects.",
    achievements: ["Developed a new theory in quantum physics", "Awarded Best Science Educator", "Worked on Mars Rover project"]
  },
  { 
    name: "Michael Johnson", 
    subject: "Chemistry", 
    image: "src/assets/img/T3.webp",
    bio: "Michael Johnson is an expert in organic chemistry, helping students prepare for competitive exams.",
    achievements: ["Authored a bestselling chemistry textbook", "Conducted international chemistry workshops", "Received Teaching Excellence Award"]
  },
  { 
    name: "Abby Gatter", 
    subject: "Chemistry", 
    image: "src/assets/img/T4.avif",
    bio: "Abby Gatter focuses on Biochemistry and has led groundbreaking research in molecular science.",
    achievements: ["Discovered a new biochemical compound", "Worked at WHO research lab", "Published 5 research articles"]
  },
  { 
    name: "Sofia Patrick", 
    subject: "Chemistry", 
    image: "src/assets/img/T5.avif",
    bio: "Sofia Patrick is an innovative Chemistry professor known for simplifying complex concepts.",
    achievements: ["Featured in Science Daily", "Created an online chemistry course with 1M+ students", "Developed new learning techniques"]
  },
  { 
    name: "Christina Thomson", 
    subject: "Chemistry", 
    image: "src/assets/img/T6.avif",
    bio: "Christina Thomson is a specialist in Inorganic Chemistry and has helped students achieve top grades.",
    achievements: ["Judge at International Chemistry Olympiad", "Invented a lab experiment for universities", "Led chemistry boot camps worldwide"]
  },
];

const Teachers = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const modalRef = useRef(null);

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedTeacher(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-16 px-6 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">
        Our Teachers
        <span className="block w-32 h-1 bg-blue-500 mx-auto mt-1 rounded-full"></span>
      </h2>

      {/* Teacher Grid (Only Circular Photos) */}
      <div className="flex flex-wrap justify-center gap-6">
        {teachers.map((teacher, index) => (
          <div 
            key={index} 
            className="relative p-2 rounded-full cursor-pointer transition-all transform hover:scale-110 hover:shadow-2xl"
            onClick={() => setSelectedTeacher(teacher)}
            style={{
              background: "linear-gradient(135deg, #4F46E5, #EC4899)",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
            }}
          >
            <img 
              src={teacher.image} 
              alt={teacher.name} 
              className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg transition-all hover:border-gray-300"
            />
          </div>
        ))}
      </div>

      {/* Modal for Teacher Details */}
      {selectedTeacher && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div ref={modalRef} className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full text-center relative mx-4">
            {/* Close Button */}
            <button className="absolute top-2 right-2 text-gray-700 hover:text-black text-xl" onClick={() => setSelectedTeacher(null)}>
              ✖
            </button>

            {/* Teacher Details */}
            <img src={selectedTeacher.image} alt={selectedTeacher.name} className="w-32  h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500 shadow-md" />
            <h2 className="text-2xl font-bold">{selectedTeacher.name}</h2>
            <h3 className="text-lg text-green-600 font-semibold">{selectedTeacher.subject}</h3>
            <p className="text-gray-600 mt-2">{selectedTeacher.bio}</p>

            {/* Achievements */}
            <h4 className="text-lg font-bold mt-4">Achievements:</h4>
            <ul className="text-gray-700 text-sm mt-2 list-disc list-inside">
              {selectedTeacher.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>

            {/* Close Button */}
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={() => setSelectedTeacher(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Teachers;