import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-50 to-orange-100 text-gray-800 py-12 px-8 md:px-20 border-t border-yellow-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Logo & About */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-orange-600">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
              BeautySalon
            </span>
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Discover your natural glow with our premium beauty treatments and
            expert care.
          </p>
        </motion.div>

        {/* Opening Hours */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Opening Hours</h3>
          <ul className="mt-3 text-lg space-y-1 text-gray-600">
            <li>Monday - Friday: <span className="font-medium text-gray-700">9AM - 7PM</span></li>
            <li>Saturday: <span className="font-medium text-gray-700">10AM - 8PM</span></li>
            <li>Sunday: <span className="text-red-500 font-medium">Closed</span></li>
          </ul>
        </motion.div>

        {/* Explore Links */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Explore</h3>
          <ul className="mt-3 text-lg space-y-2">
            <li className="hover:text-orange-500 transition">
              <Link to="/" id='home'>🏡 Home</Link>
            </li>
            <li className="hover:text-orange-500 transition">
              <Link to="/about" id='about'>📖 About</Link>
            </li>
            <li className="text-orange-500 font-medium">
              <Link to="/services" id="Services">💅 Services</Link>
            </li>
            <li className="text-orange-500 font-medium">
              <Link to="/appointment" id="contact">📅 Book Appointment</Link>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Connect With Us</h3>
          <div className="mt-3 flex space-x-5">
            <motion.a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white p-4 rounded-full shadow-md hover:bg-orange-600 transition"
              whileHover={{ scale: 1.1 }}
            >
              <FaInstagram size={22} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-700 text-white p-4 rounded-full shadow-md hover:bg-orange-800 transition"
              whileHover={{ scale: 1.1 }}
            >
              <FaFacebookF size={22} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-lg text-orange-600 mt-10">
        <p>© 2025 BeautySalon. All Rights Reserved.</p>
        <p className="text-md mt-1">
          Designed with ❤️ by <span className="font-semibold">Rahul Kumar Saini</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
