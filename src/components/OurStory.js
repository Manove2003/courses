import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ourstory from "../assests/ourstory.png";
import "./Imageline.css";

const OurStory = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleApplyClick = () => {
    navigate("/become-server"); // Navigate to the /serverform path
  };

  return (
    <div className="bg-gray-100 pt-6 py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Welcome to our comprehensive course platform, designed specifically
            for Discord server owners who want to master the art of growing and
            managing successful communities. Our courses cover everything you
            need to know, from setting up your server to mastering advanced
            strategies for engagement, growth, and monetization.
          </p>
          <p className="text-gray-600 mb-4">
            Whether you're new to Discord or looking to take your server to the
            next level, our step-by-step courses provide the knowledge and tools
            necessary to achieve your goals. Learn how to create an engaging
            environment, grow your community effectively, and implement best
            practices for server management and monetization.
          </p>
          <p className="text-gray-600 mb-6">
            Start your journey today with our expert-led courses and transform
            your Discord server into a thriving community.
          </p>
          <button
            onClick={handleApplyClick} // Handle click to navigate
            className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600"
          >
            Apply As Server
          </button>
        </div>

        <div className="flex justify-center">
          <div className="image-container">
            <img src={ourstory} alt="Team" className="shadow-lg" />
            <div className="border-right"></div>
            <div className="border-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
