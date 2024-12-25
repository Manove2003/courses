import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const InstructorForm = () => {
  const [bio, setBio] = useState("");

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  return (
    <>
      <Navbar /> {/* Header Component */}
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="w-full max-w-md text-xl font-semibold text-center mb-4 mt-4">
          Want To Apply As An Instructor? Fill Out Our Form
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-16 border border-gray-400">
          <form className="space-y-4">
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
            <input
              id="dob"
              type="date"
              required
              className="w-full p-2 border border-gray-400 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none"
            />
            <input
              id="expertise"
              type="text"
              required
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter Your Expertise"
            />
            <div className="relative">
              <textarea
                id="bio"
                maxLength="500"
                required
                value={bio}
                onChange={handleBioChange}
                className="w-full h-32 p-2 pr-10 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                placeholder="Enter up to 500 characters..."
              />
              <span className="absolute bottom-2 right-4 text-sm text-gray-600 pb-2">
                {bio.length} / 500
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-full font-medium hover:bg-teal-600"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer /> {/* Footer Component */}
    </>
  );
};

export default InstructorForm;
