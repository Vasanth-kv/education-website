import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-2 text-center">Contact</h2>
      <span className="block w-20 h-1 bg-blue-500 mx-auto mt-0 rounded-full"></span>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Form */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
          <p className="text-gray-600 text-center">Have any questions? Reach out to us!</p>
          
          <form className="mt-12">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded mb-4" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded mb-4" />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded mb-4"></textarea>
            <button type="submit" className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Location Map */}
        <div className="mb-32 h-2/4 rounded-lg bg-transparent bg-white shadow-md">
          <h3 className="text-3xl font-bold mb-1 text-center">Our Location</h3>
          <iframe
            className="mb-11 rounded-lg rounded-t-none shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.768723!2d80.2701866153211!3d13.082680990774859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526609fdf5e8b1%3A0x8f5e5f0f9f9f5f5!2sChennai!5e0!3m2!1sen!2sin!4v1638782594113"
            width="100%" height="390" allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;




// import React from "react";

// const Contact = () => {
//   return (
//     <section className="py-16 text-center">
//       <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
//       <p className="text-gray-600">Have any questions? Reach out to us!</p>
//       <form className="mt-6 max-w-md mx-auto">
//         <input type="text" placeholder="Your Name" className="w-full p-3 border rounded mb-4" />
//         <input type="email" placeholder="Your Email" className="w-full p-3 border rounded mb-4" />
//         <textarea placeholder="Your Message" className="w-full p-3 border rounded mb-4"></textarea>
//         <button className="px-6 py-2 bg-green-500 text-white rounded">Send Message</button>
//       </form>
//       <div className="mt-8">
//         <h3 className="text-lg font-semibold">Our Location</h3>
//         <iframe
//           className="w-full h-64 mt-4 rounded-lg"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.768723!2d80.2701866153211!3d13.082680990774859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d8d53a7d65%3A0x2d43567d30398e84!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1627743929854!5m2!1sen!2sin"
//           title="Google Maps"
//         ></iframe>
//       </div>
//     </section>
//   );
// };

// export default Contact;
