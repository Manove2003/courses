import React, { useState } from "react";

const reviewsData = [
  {
    id: 1,
    name: "Leonardo Da Vinci",
    rating: 4.6,
    review:
      "Loved the course. I’ve learned some very subtle techniques, especially on leaves.",
    image: "https://via.placeholder.com/50/0000FF/FFFFFF?Text=1", // Replace with actual image
  },
  {
    id: 2,
    name: "Andros",
    rating: 4.6,
    review:
      "Fantastic instructor! The course was incredibly helpful in boosting my server engagement and growth. Highly recommend!",
    image: "https://via.placeholder.com/50/FF0000/FFFFFF?Text=2", // Replace with actual image
  },
  {
    id: 3,
    name: "Sarah Connor",
    rating: 4.8,
    review:
      "Amazing instructor! The course provided great insights into AI and machine learning. Highly recommend!",
    image: "https://via.placeholder.com/50/00FF00/FFFFFF?Text=3", // Replace with actual image
  },
  {
    id: 4,
    name: "Tony Stark",
    rating: 4.9,
    review:
      "The instructor was very knowledgeable, and the course was extremely engaging. Highly recommend!",
    image: "https://via.placeholder.com/50/FFFF00/FFFFFF?Text=4", // Replace with actual image
  },
  {
    id: 5,
    name: "Bruce Wayne",
    rating: 4.7,
    review:
      "Insightful and practical. This course helped me structure my ideas better.",
    image: "https://via.placeholder.com/50/000000/FFFFFF?Text=5", // Replace with actual image
  },
  {
    id: 6,
    name: "Clark Kent",
    rating: 4.6,
    review:
      "Incredible depth and clarity. I now feel more confident in my work.",
    image: "https://via.placeholder.com/50/123456/FFFFFF?Text=6", // Replace with actual image
  },
];

const Reviews = () => {
  const [showAll, setShowAll] = useState(false);

  // Decide how many reviews to show based on the state
  const visibleReviews = showAll ? reviewsData : reviewsData.slice(0, 5);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-left text-green-600 md:text-4xl mb-6">
          Reviews
        </h2>

        {/* Reviews List */}
        <div className="space-y-6">
          {visibleReviews.map((review) => (
            <div key={review.id} className="flex items-start space-x-4">
              {/* User Image */}
              <div className="w-12 h-12 flex-shrink-0 mt-1">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full rounded-full object-cover "
                />
              </div>

              {/* Review Content */}
              <div>
                <h3 className="font-semibold text-green-600 flex items-center">
                  {review.name}
                  <span className="text-sm text-green-600 ml-2">
                    ({review.rating})
                  </span>
                </h3>
                <p className="text-xs text-gray-500">Today</p>
                <p className="mt-2 text-gray-700 text-sm">{review.review}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        {!showAll && (
          <div className="text-center mt-6">
            <button
              onClick={handleShowAll}
              className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
            >
              Load more review
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
