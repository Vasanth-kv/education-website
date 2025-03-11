import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import AppHeader from "./Components/AppHeader";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Features from "./Components/Features";
import Courses from "./Components/Courses";
import Programs from "./Components/Programs";
import Blog from "./Components/Blog";
import FeatureDetails from "./Pages/FeatureDetails";
import CourseDetails from "./Pages/CourseDetails";
import ProgramDetails from "./Pages/ProgramDetails";
import BlogDetails from "./Pages/BlogDetails";

function App() {
  return (
    <Router>
      <div className="font-sans">
      <ScrollToTop />
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/feature/:featureId" element={<FeatureDetails />} /> 
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/programs/:programId" element={<ProgramDetails />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;