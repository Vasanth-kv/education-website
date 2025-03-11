import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Styles/Blog.css"; 

const blogPosts = [
  { id: "1", title: "Effective Online Learning", date: "March 10, 2025", image: "/src/assets/img/B1.avif" },
  { id: "2", title: "How to use Music in Education", date: "March 5, 2025", image: "/src/assets/img/B2.avif" },
  { id: "3", title: "Future of AI in Learning", date: "February 20, 2025", image: "/src/assets/img/B3.avif" },
  { id: "4", title: "The Nation into Education", date: "February 28, 2025", image: "/src/assets/img/B4.avif" },
  { id: "5", title: "Gamification in Education", date: "February 10, 2025", image: "/src/assets/img/B5.webp" },
  { id: "6", title: "Personalized Learning Strategies", date: "February 1, 2025", image: "/src/assets/img/B6.webp" },
];

const Blog = () => {
  return (
    <section className="blog-section py-16 text-center bg-gray-100">
      <h2 className="text-4xl mt-10 font-bold text-gray-800 relative inline-block">
        Latest Blogs
        <span className="block w-20 h-1 bg-blue-500 mx-auto mt-1 mb-2 rounded-full"></span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true} 
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id} className="blog-slide">
            <div className="blog-card bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
              <img src={post.image} alt={post.title} className="w-full h-52 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">{post.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{post.date}</p>
              <Link to={`/blog/${post.id}`}>
                <button className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:opacity-90 transition transform hover:scale-105">
                  Read More
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Blog;
