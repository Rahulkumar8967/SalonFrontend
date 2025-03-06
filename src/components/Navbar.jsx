import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  FiCalendar,
  FiHome,
  FiMenu,
  FiUser,
  FiX,
} from "react-icons/fi"; 
import { GiScissors } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navShadow, setNavShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavShadow(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 transition-all duration-500">
      {/* Navbar Background */}
      <div className={`bg-white backdrop-blur-2xl ${navShadow ? "shadow-xl" : "shadow-md"}`}>
        <nav className="border-b border-pink-400/20">
          <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between relative">
            {/* Logo */}
            <div className="flex items-center">
              <span className="cursor-pointer text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-[poppins] tracking-tighter">
                BeautySalon
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-6 lg:space-x-10">
              {[
                { to: "home", icon: <FiHome />, label: "Home" },
                { to: "about", icon: <FiUser />, label: "About" },
                { to: "services", icon: <GiScissors />, label: "Services" }
              ].map(({ to, icon, label }) => (
                <Link
                  key={to}
                  to={to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer flex items-center text-gray-600 hover:text-pink-800 transition-all duration-300 relative group font-[poppins] font-medium text-base lg:text-lg"
                >
                  {icon} <span className="ml-1 lg:ml-2">{label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Book Appointment Button (Desktop) */}
            <div className="hidden md:block">
              <Link to="contact" spy={true} smooth={true} duration={500} className="flex items-center bg-pink-400 hover:bg-pink-600 text-white px-4 py-2 lg:px-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer font-[poppins] font-semibold border border-pink-400 text-sm lg:text-base">
                <FiCalendar className="mr-1 lg:mr-2"/>
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button className="md:hidden text-gray-800 hover:text-pink-800 transition-colors duration-300 p-2 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-pink-100/90 z-50 flex flex-col items-center justify-center transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button className="absolute top-5 right-5 text-gray-800 hover:text-pink-700 text-3xl" onClick={() => setIsMenuOpen(false)}>
          <FiX />
        </button>

        {/* Mobile Menu Links */}
        <div className="space-y-8">
          {[
            { to: "home", icon: <FiHome />, label: "Home" },
            { to: "about", icon: <FiUser />, label: "About" },
            { to: "services", icon: <GiScissors />, label: "Services" }
          ].map(({ to, icon, label }) => (
            <Link 
              key={to} 
              to={to} 
              spy={true} 
              smooth={true} 
              duration={500} 
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer flex flex-col items-center text-gray-800 hover:text-pink-700 transition-all duration-300 font-[poppins] text-xl"
            >
              {icon}
              <span className="mt-1">{label}</span>
            </Link>
          ))}

          {/* Book Appointment (Mobile) */}
          <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500} 
            onClick={() => setIsMenuOpen(false)}
            className="flex flex-col items-center bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer font-[poppins] font-semibold text-lg"
          >
            <FiCalendar className="mb-2 text-2xl" />
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
