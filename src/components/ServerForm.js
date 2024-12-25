import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ServerForm = () => {
  const [bio, setBio] = useState(""); // State for bio text

  const handleBioChange = (event) => {
    setBio(event.target.value); // Update bio state on change
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Handle form submission logic here
    console.log("Form submitted with bio: ", bio);
    // You can add your form submission logic here (e.g., sending data to a server)
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="w-full max-w-md text-xl font-semibold text-center mb-4 mt-4">
          Want To Apply As An Server Fill Out Our Form
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-16 border border-gray-400">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Attach handleSubmit to form */}
            <input
              id="firstName"
              type="text"
              required
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="First Name"
            />
            <input
              id="lastName"
              type="text"
              required
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Last Name"
            />
            <div className="space-y-4">
              <div className="flex items-center space-x-2   w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                <input
                  id="expertiseCheckbox"
                  type="checkbox"
                  className="form-checkbox h-6 w-5 text-teal-500"
                />
                <label
                  htmlFor="expertiseCheckbox"
                  className="text-gray-600 text-sm"
                >
                  You are the owner
                </label>
              </div>
            </div>
            <div className="relative">
              <textarea
                id="bio"
                maxLength="500"
                required
                value={bio}
                onChange={handleBioChange}
                className="w-full h-32 p-2 pr-10 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                placeholder="Description of server"
              />
              <span className="absolute bottom-2 right-4 text-sm text-gray-600 pb-2">
                {bio.length} / 500
              </span>
            </div>
            <div className="relative">
              <textarea
                id="bio"
                maxLength="500"
                required
                value={bio}
                onChange={handleBioChange}
                className="w-full h-32 p-2 pr-10 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                placeholder="What you are looking for?"
              />
              <span className="absolute bottom-2 right-4 text-sm text-gray-600 pb-2">
                {bio.length} / 500
              </span>
            </div>
            <input
              id="DomainLangugage"
              type="text"
              required
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Domain Langugage"
            />
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-full font-medium hover:bg-teal-600"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServerForm;
