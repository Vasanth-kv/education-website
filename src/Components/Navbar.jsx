import React, { useState, useRef } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Open dropdown immediately
  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  // Delay dropdown close by 500ms when mouse leaves
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 500);
  };

  // ✅ **Universal Navigation Handler**
  const handleNavigation = (target) => {
    if (location.pathname !== "/") {
      navigate("/"); // Go to Home first
      setTimeout(() => {
        scroller.scrollTo(target, { smooth: true, duration: 800, offset: -80 });
      }, 500);
    } else {
      scroller.scrollTo(target, { smooth: true, duration: 800, offset: -80 });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="bg-black bg-opacity-90 py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50">
      
      {/* Logo / Website Title (Click to Go Home) */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <RouterLink to="/" onClick={() => handleNavigation("home")}>
          <FontAwesomeIcon icon={faBookOpen} className="text-green-500 text-3xl" />
        </RouterLink>
        <RouterLink to="/" onClick={() => handleNavigation("home")} className="text-xl font-bold text-white">
          EDUCATION
        </RouterLink>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        {["home", "about", "courses", "contact"].map((item) => (
          <li key={item}>
            <button 
              onClick={() => handleNavigation(item)} 
              className="text-white cursor-pointer hover:text-green-400"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}

        {/* Dropdown Menu */}
        <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button className="text-white flex items-center space-x-1 hover:text-green-400">
            <span>More</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>

          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-gray-900 text-white rounded-md shadow-lg border border-gray-700"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {["features", "teachers", "programs", "testimonials", "blog", "newsletter"].map((item) => (
                <button 
                  key={item} 
                  onClick={() => handleNavigation(item)} 
                  className="block w-full p-3 text-center hover:bg-green-500 cursor-pointer transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </ul>
          )}
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-2xl focus:outline-none" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 w-full h-screen bg-gray-900 bg-opacity-95 backdrop-blur-xl flex flex-col items-center justify-center space-y-6 transition-opacity duration-300">
          
          {/* Close Button */}
          <button className="absolute top-5 right-6 text-3xl text-white hover:text-red-500 transition-all" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {/* Navigation Links */}
          {["home", "about", "courses", "contact"].map((item) => (
            <button 
              key={item} 
              onClick={() => handleNavigation(item)}
              className="text-white text-2xl text-center font-semibold w-full max-w-xs py-3 flex 
                         items-center justify-center bg-gray-800 rounded-lg shadow-md 
                         hover:bg-green-500 hover:scale-105 transition-all duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          {/* Mobile Dropdown */}
          <button className="text-white text-2xl font-semibold flex items-center space-x-2 hover:text-green-400 transition-all duration-300" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <span>More</span>
            <FontAwesomeIcon icon={faChevronDown} className={`transform transition-all ${dropdownOpen ? "rotate-180" : "" }`} />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md text-white rounded-xl shadow-lg border border-gray-700 px-8 py-1 flex flex-col items-center space-y-2 transition-all duration-300">
              {["features", "teachers", "programs", "testimonials", "blog", "newsletter"].map((item) => (
                <button 
                  key={item} 
                  onClick={() => handleNavigation(item)}
                  className="block text-xl py-2 px-4 rounded-lg w-full text-center 
                             hover:bg-green-500 hover:bg-opacity-30 transition-all duration-300 cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
