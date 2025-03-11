import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";  // ✅ Import About
import Features from "../Components/Features";
import Courses from "../Components/Courses";
import Teachers from "../Components/Teachers";
import Programs from "../Components/Programs";
import Testimonials from "../Components/Testimonials";
import Blog from "../Components/Blog";
import Newsletter from "../Components/Newsletter";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <div id="about"><About /></div>  {/* ✅ Add About section */}
      <div id="features"><Features /></div>
      <div id="courses"><Courses /></div>
      <div id="teachers"><Teachers /></div>
      <div id="programs"><Programs /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="blog"><Blog /></div>
      <div id="newsletter"><Newsletter /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default Home;
