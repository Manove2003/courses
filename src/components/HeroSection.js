import React from "react";
import HerosectionImg from "../assests/heroimg.png"; // Ensure the correct path to the image
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleBecomeInstructorClick = () => {
    navigate("/become-instructor");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mt-4 mb-4 mx-auto px-6 md:px-20 lg:px-40">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              Empower Your Discord Community with Expert
            </h1>
            <p className="text-gray-600 mt-4 text-sm sm:text-base lg:text-lg">
              Personalized coaching and strategies for server owners to grow and
              engage their communities.
            </p>
            <button
              className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600"
              onClick={handleBecomeInstructorClick}
            >
              Become Instructor
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <img
              src={HerosectionImg}
              alt="Empowering Discord Community"
              className="  object-cover w-full max-h-[400px] md:max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
