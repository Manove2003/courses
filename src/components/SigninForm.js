import React from "react";
import { FaDiscord } from "react-icons/fa"; // Importing the Discord icon from react-icons

const SigninForm = () => {
  return (
    <div className="flex flex-col items-center pt-8 justify-center min-h-screen bg-gray-100">
      <h2 className="text-xl font-bold text-center mb-2">
        Welcome To Sebayett
      </h2>
      <p className="text-sm text-gray-500 text-center mb-4">
        Signin to access a world of top tier Coaching
      </p>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md px-6 py-8 border border-gray-300">
        <a href="https://discord.com/register" rel="noopener noreferrer">
          <button className="flex items-center justify-center w-full bg-gray-100 text-gray-600 border-2 border-teal-500 rounded-full py-2 mb-4 hover:bg-gray-200">
            <FaDiscord className="w-5 h-5 text-blue-600 mr-2" />
            Signup with Discord
          </button>
        </a>

        {/* Divider */}
        <div className="relative flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">
            or signup with email
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Signin Form */}
        <form>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-teal-500"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-teal-500"
          />

          {/* Forgot Password Link */}
          <div className="flex justify-end mb-4">
            <a
              href="/forgot-password"
              className="text-sm text-teal-500 hover:underline"
            >
              Forgot your password?
            </a>
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="remember-me"
              className="mr-2 rounded border-gray-300"
            />
            <label htmlFor="remember-me" className="text-sm text-gray-500">
              Remember for 30 days
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-bold py-3 rounded-full hover:bg-teal-600"
          >
            Signin
          </button>
        </form>

        {/* Footer Section */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-teal-500 font-bold hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;
