import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-500 text-white py-8 pt-10 ">
      {/* Links Section */}
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-3 mb-4 sm:gap-8">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#portfolio" className="hover:underline">
            Portfolio
          </a>
          <a href="#blogs" className="hover:underline">
            Blogs
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>

        <div className="flex justify-center gap-6 text-xl mb-4 pt-6 pb-10">
          <a href="#" className="hover:text-gray-300" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
        <p className="text-sm text-gray-200 border-t-2 border-t-gray-600 pt-4">
          © 2024 All rights reserved. This is Your Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;
