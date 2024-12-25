import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const InstructorDetail = () => {
  const location = useLocation();
  const { instructor } = location.state || {};

  const [showAll, setShowAll] = useState(false);

  if (!instructor) {
    return <p>Instructor details not found.</p>;
  }

  const visibleReviews = showAll
    ? instructor.reviews
    : instructor.reviews.slice(0, 3);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <>
      <Navbar />
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100  p-6 pt-8 pb-12">
          <div className="flex justify-center md:justify-start">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800">
              {instructor.name}
            </h1>
            <p className="text-xl text-gray-600 mt-2">{instructor.title}</p>
            <div className="mt-6 text-gray-800 text-lg leading-relaxed">
              <p>{instructor.description}</p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className=" py-12 pl-12 pr-8">
          <h2 className="text-3xl font-bold text-green-600 mb-6">Reviews</h2>
          <div className="space-y-6">
            {visibleReviews.map((review) => (
              <div key={review.id} className="flex items-start space-x-4">
                <div className="w-12 h-12 flex-shrink-0 mt-1">
                  <img
                    src={review.imagegreview}
                    alt={review.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 flex items-center">
                    {review.name}
                    <span className="text-sm text-green-600 ml-2">
                      ({review.rating})
                    </span>
                  </h3>
                  <p className="text-xs text-gray-500">{review.date}</p>
                  <p className="mt-2 text-gray-700 text-sm">{review.review}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Conditional Rendering of Show All Button */}
          {!showAll && instructor.reviews.length > 3 && (
            <div className="text-center mt-6">
              <button
                onClick={handleShowAll}
                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
              >
                Show All Reviews
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InstructorDetail;
