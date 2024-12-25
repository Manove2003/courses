import React from "react";
import { FaDiscord } from "react-icons/fa"; // Importing the Discord icon from react-icons

const SignupForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-8 bg-gray-100">
      {/* Heading Section moved outside the box */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Welcome To Sebayett</h2>
        <p className="text-sm text-gray-500">
          Signup to access a world of top-tier Coaching
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg w-full max-w-md px-6 py-8 border border-gray-500">
        {/* Discord Signup Button */}
        <a href="https://discord.com/register" rel="noopener noreferrer">
          <button className="flex items-center justify-center w-full bg-gray-100 text-gray-600 border-2 border-teal-500 rounded-full py-2 mb-6 hover:bg-gray-200">
            <FaDiscord className="w-5 h-5 text-blue-600 mr-2" />
            Signup with Discord
          </button>
        </a>

        {/* Signup with Email Divider */}
        <div className="relative flex items-center mb-6">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="mx-4 text-sm text-gray-500">
            or signup with email
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Signup Form */}
        <form>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full mb-4 p-3 border  border-gray-500 rounded-lg focus:outline-teal-500"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full mb-4 p-3 border border-gray-500 rounded-lg focus:outline-teal-500"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-4 p-3 border border-gray-500 rounded-lg focus:outline-teal-500"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full mb-4 p-3 border border-gray-500 rounded-lg focus:outline-teal-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full mb-4 p-3 border-gray-500 border rounded-lg focus:outline-teal-500"
          />
          <input
            type="date"
            className="w-full mb-4 p-3 border border-gray-500 rounded-lg focus:outline-teal-500"
          />
          <select className="w-full mb-4 p-3 border border-gray-500 rounded-lg focus:outline-teal-500">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <select className="w-full mb-4 p-3 border border-gray-500 rounded-lg focus:outline-teal-500">
            <option>Choose Country</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
            <option>India</option>
          </select>
          <select className="w-full mb-4 p-3 border border-gray-500 rounded-lg focus:outline-teal-500">
            <option>Select Languages</option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-bold py-3 rounded-full hover:bg-teal-600"
          >
            Signup
          </button>
        </form>

        {/* Signin Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/Signin" className="text-teal-500 font-bold hover:underline">
            Signin
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
