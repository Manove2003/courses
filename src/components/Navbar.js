import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white ">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between lg:justify-evenly py-4">
        {/* Hamburger Menu for Small Screens */}
        <button
          className="text-gray-600 lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <i className="fas fa-times text-2xl"></i> // X Icon
          ) : (
            <i className="fas fa-bars text-2xl"></i> // Hamburger Icon
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute lg:static top-16 left-0 bg-white w-full lg:w-auto lg:flex lg:items-center lg:space-x-8 lg:py-0 transition-all duration-300 ${
            menuOpen ? "block py-4 shadow-lg" : "hidden"
          }`}
        >
          <a
            href="/"
            className="block text-gray-600 hover:text-teal-500 py-2 px-4 lg:px-0"
          >
            Home
          </a>
          <a
            href="/our-teachers"
            className="block text-gray-600 hover:text-teal-500 py-2 px-4 lg:px-0"
          >
            Our Teachers
          </a>
          <a
            href="/events"
            className="block text-gray-600 hover:text-teal-500 py-2 px-4 lg:px-0"
          >
            Scheduled Events
          </a>
          <a
            href="/faqs"
            className="block text-gray-600 hover:text-teal-500 py-2 px-4 lg:px-0"
          >
            FAQs
          </a>
        </div>

        {/* Right-side icons */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <button className="text-gray-600 hover:text-teal-500 lg:hidden">
            <i className="fas fa-shopping-cart text-xl"></i>
          </button>
          <button className="text-gray-600 hover:text-teal-500 hidden lg:block">
            <i className="fas fa-shopping-cart text-xl"></i>
          </button>

          {/* Sign In Button */}
          <a
            href="/signin"
            className=" lg:block py-2 ml-4 px-4 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
