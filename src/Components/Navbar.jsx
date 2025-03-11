import React, { useState, useRef } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Open dropdown immediately
  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  // Delay dropdown close by 300ms when mouse leaves
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 300);
  };

  return (
    <nav className="bg-black bg-opacity-90 py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50">
      {/* Logo (Click to Navigate Home) */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <Link to="home" smooth={true} duration={800} offset={-80} className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faBookOpen} className="text-green-500 text-3xl" />
          <h1 className="text-xl font-bold text-white">EDUCATION</h1>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        {["home", "about", "courses", "contact"].map((item) => (
          <li key={item}>
            <Link to={item} smooth={true} duration={800} offset={-80} className="text-white cursor-pointer hover:text-green-400">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}

        {/* Dropdown Menu with Delay */}
        <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button className="text-white flex items-center space-x-1 hover:text-green-400">
            <span>More</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>

          {dropdownOpen && (
            <ul 
              className="absolute right-0 mt-2 w-48 bg-gray-900 bg-opacity-80 backdrop-blur-md 
                         text-white rounded-xl shadow-lg border border-gray-700 p-2"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
            >
              {["features", "teachers", "programs", "testimonials", "blog", "newsletter"].map((item) => (
                <Link 
                  key={item} 
                  to={item} 
                  smooth={true} 
                  duration={800} 
                  offset={-80} 
                  className="block w-full p-3 text-center hover:bg-green-500 hover:bg-opacity-30 
                             rounded-lg cursor-pointer transition-all duration-300"
                  onClick={() => setDropdownOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </ul>
          )}
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white text-2xl p-3 rounded-lg bg-gray-800 bg-opacity-30 
                   hover:bg-green-500 hover:bg-opacity-70 transition-all duration-300 
                   active:scale-110 shadow-md"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 w-full h-screen bg-gray-900 bg-opacity-95 backdrop-blur-xl 
                        flex flex-col items-center justify-center space-y-6 p-4 transition-opacity duration-300 animate-fade-in">
          
          {/* Close Button */}
          <button 
            className="absolute top-5 right-6 text-3xl text-white hover:text-red-500 transition-all" 
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {/* Navigation Links */}
          {["home", "about", "courses", "contact"].map((item) => (
            <Link 
              key={item} 
              to={item} 
              smooth={true} 
              duration={800} 
              offset={-80} 
              className="text-white text-2xl text-center font-semibold w-full max-w-xs py-4 flex 
                         items-center justify-center bg-gray-800 rounded-lg shadow-md 
                         hover:bg-green-500 hover:scale-105 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          {/* Mobile Dropdown */}
          <button 
            className="text-white text-2xl font-semibold flex items-center space-x-2 hover:text-green-400 transition-all duration-300" 
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>More</span> 
            <FontAwesomeIcon icon={faChevronDown} className={`transform transition-all ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="w-full max-w-xs bg-gray-900 bg-opacity-80 backdrop-blur-md text-white 
                            rounded-xl shadow-lg border border-gray-700 px-6 py-4 flex flex-col 
                            items-center space-y-2 transition-all duration-300">
              {["features", "teachers", "programs", "testimonials", "blog", "newsletter"].map((item) => (
                <Link 
                  key={item} 
                  to={item} 
                  smooth={true} 
                  duration={800} 
                  offset={-80} 
                  className="block text-xl py-2 px-4 rounded-lg w-full text-center 
                             hover:bg-green-500 hover:bg-opacity-30 transition-all duration-300 cursor-pointer"
                  onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
