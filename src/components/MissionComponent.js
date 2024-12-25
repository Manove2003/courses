import React from "react";
import { useNavigate } from "react-router-dom";
import ourstory from "../assests/ourstory.png";
import "./Imageline.css";

const MissionComponent = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleCreateAccount = () => {
    navigate("/signup"); // Navigate to the signup page
  };

  return (
    <div className="py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="image-container">
            <img src={ourstory} alt="Team" className="shadow-lg" />
            <div className="border-right"></div>
            <div className="border-bottom"></div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            We understand the unique challenges that come with growing and
            maintaining a successful server. That's why our courses are designed
            to provide actionable strategies, from the basics of server setup to
            advanced techniques for increasing engagement, fostering community
            loyalty, and maximizing monetization opportunities.
          </p>
          <p className="text-gray-600 mb-4">
            Our mission is to help you transform your Discord server into a
            dynamic, engaged community that thrives. Whether you're just
            starting out or aiming to scale your server, we are here to guide
            you every step of the way.
          </p>

          <button
            className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600"
            onClick={handleCreateAccount} // Trigger navigation on click
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionComponent;
