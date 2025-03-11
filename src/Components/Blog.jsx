import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Styles/Blog.css"; 

const blogPosts = [
  { title: "Effective Online Learning", date: "March 10, 2025", image: "src/assets/img/B1.avif" },
  { title: "How to use Music in Education", date: "March 5, 2025", image: "src/assets/img/B2.avif" },
  { title: "Future of AI in Learning", date: "February 20, 2025", image: "src/assets/img/B3.avif" },
  { title: "The Nation into Education", date: "February 28, 2025", image: "src/assets/img/B4.avif" },
  { title: "Gamification in Education", date: "February 10, 2025", image: "src/assets/img/B5.webp" },
  { title: "Personalized Learning Strategies", date: "February 1, 2025", image: "src/assets/img/B6.webp" },
];

const Blog = () => {
  return (
    <section className="blog-section">
      <h2 className="blog-title">
        Latest Blogs
        <span className="block w-32 h-1 bg-blue-500 mx-auto mt-0 rounded-full"></span>
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true} // Keeps the middle blog fully visible
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogPosts.map((post, index) => (
          <SwiperSlide key={index} className="blog-slide">
            <div className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <h3 className="blog-heading">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <button className="read-more">Read More</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Blog;
