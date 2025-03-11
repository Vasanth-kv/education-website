import React from "react";
import { useParams, Link } from "react-router-dom";

const blogPosts = {
  "1": { 
    title: "Effective Online Learning", 
    content: "Learn the best techniques to make online education engaging and productive...",
    image: "/src/assets/img/B1.avif",
    date: "March 10, 2025"
  },
  "2": { 
    title: "How to use Music in Education", 
    content: "Discover how incorporating music can enhance students' learning abilities...",
    image: "/src/assets/img/B2.avif",
    date: "March 5, 2025"
  },
  "3": { 
    title: "Future of AI in Learning", 
    content: "Artificial intelligence is reshaping education with personalized learning and smart tutors...",
    image: "/src/assets/img/B3.avif",
    date: "February 20, 2025"
  },
  "4": { 
    title: "The Nation into Education", 
    content: "Why national investment in education is crucial for economic growth and development...",
    image: "/src/assets/img/B4.avif",
    date: "February 28, 2025"
  },
  "5": { 
    title: "Gamification in Education", 
    content: "Explore how game-based learning techniques can boost student engagement...",
    image: "/src/assets/img/B5.webp",
    date: "February 10, 2025"
  },
  "6": { 
    title: "Personalized Learning Strategies", 
    content: "Learn how adaptive learning models are making education more student-centric...",
    image: "/src/assets/img/B6.webp",
    date: "February 1, 2025"
  }
};

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts[id] || { 
    title: "Post Not Found", 
    content: "This blog post does not exist.", 
    image: "/src/assets/img/placeholder.avif",
    date: "N/A"
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 py-16">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-10 text-center border border-white/20">
        
        {/* Blog Image */}
        <div className="mb-6">
          <img src={post.image} alt={post.title} className="w-full h-60 object-cover rounded-lg shadow-lg" />
        </div>

        {/* Blog Title */}
        <h2 className="text-4xl font-extrabold tracking-wide mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          {post.title}
        </h2>

        {/* Underline Effect */}
        <div className="w-44 h-1 bg-blue-400 mx-auto mb-2 rounded-full"></div>

        {/* Blog Date */}
        <p className="text-gray-400 text-sm">{post.date}</p>

        {/* Blog Content */}
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {post.content}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/" 
            className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-400 transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link 
            to="/blog" 
            className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:bg-green-400 transition-all duration-300"
          >
            View More Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
