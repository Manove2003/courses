import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import i1 from "../../assests/i1.png";
import i2 from "../../assests/i2.png";
import i3 from "../../assests/i3.png";
import i4 from "../../assests/i4.png";
import imgreview from "../../assests/Square.png";

const ExperienceTeacher = () => {
  const navigate = useNavigate();

  const instructors = [
    {
      id: 1,
      name: "Devon Lane",
      title: "Senior Developer",
      rating: 4.6,
      students: "854",
      image: i1,
      description:
        "is an experienced online coach and software development expert...",
      reviews: [
        {
          id: 1,
          name: "Leonardo Da Vinci",
          imagegreview: imgreview,
          rating: 4.6,
          date: "2-12-2023",
          review:
            "Loved the course. I’ve learned some very subtle techniques...",
        },
        {
          id: 2,
          imagegreview: imgreview,
          name: "Andros",
          rating: 4.6,
          date: "Today",
          review: "Fantastic instructor! The course was incredibly helpful...",
        },
        {
          id: 3,
          imagegreview: imgreview,
          name: "Leonardo Da Vinci",
          rating: 4.6,
          date: "4-11-2020",
          review:
            "Loved the course. I’ve learned some very subtle techniques...",
        },
        {
          id: 4,
          imagegreview: imgreview,
          name: "Andros",
          rating: 4.6,
          date: "Today",
          review: "Fantastic instructor! The course was incredibly helpful...",
        },
        {
          id: 5,
          imagegreview: imgreview,
          name: "Leonardo Da Vinci",
          rating: 4.6,
          date: "Today",
          review:
            "Loved the course. I’ve learned some very subtle techniques...",
        },
        {
          id: 6,
          imagegreview: imgreview,
          name: "Andros",
          rating: 4.6,
          date: "24-11-2022",

          review: "Fantastic instructor! The course was incredibly helpful...",
        },
      ],
    },
    {
      id: 2,
      name: "Darrell Steward",
      title: "Digital Product Designer",
      rating: 4.9,
      students: "451,444",
      image: i2,
      description:
        "is an expert product designer specializing in UI/UX design...",
      reviews: [
        {
          id: 1,
          imagegreview: imgreview,
          name: "Sarah Connor",
          rating: 4.8,
          date: "20-12-2023",
          review: "Amazing instructor! Great insights into design thinking.",
        },
      ],
    },
    {
      id: 3,
      name: "Jane Cooper",
      title: "UI/UX Designer",
      rating: 4.8,
      students: "435,671",
      image: i3,
      description:
        "is a seasoned UI/UX designer with a passion for crafting...",
      reviews: [
        {
          id: 1,
          imagegreview: imgreview,
          name: "Tony Stark",
          rating: 4.9,
          date: "12-02-2024",
          review: "Great course with practical examples for UI design!",
        },
      ],
    },
    {
      id: 4,
      name: "Albert Flores",
      title: "Adobe Instructor",
      rating: 4.7,
      students: "511,123",
      image: i4,
      description:
        "is an experienced online coach and Discord server expert, with over [X] years of hands-on experience in growing and managing thriving communities on Discord. Specializing in community engagement, server optimization, and growth strategies, [Teacher's Name] has helped countless server owners maximize their potential. With a passion for teaching and a deep understanding of Discord’s unique features, they provide clear, actionable insights in each course. Their approach combines technical knowledge with practical strategies to ensure that every student can build and scale a successful Discord community. Whether you're just starting or looking to optimize your server, [Teacher's Name] offers personalized guidance to meet your needs. Get ready to learn from a true professional and take your server to the next level!",
      reviews: [
        {
          id: 1,
          imagegreview: imgreview,
          name: "Bruce Wayne",
          rating: 4.7,
          date: "12-02-2024",
          review: "Insightful and practical.",
        },
      ],
    },
  ];

  const handleCardClick = (instructor) => {
    navigate(`/instructor/${instructor.id}`, { state: { instructor } });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 md:text-4xl">
          Explore Our Experienced Teachers!
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              onClick={() => handleCardClick(instructor)}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {instructor.name}
                </h3>
                <p className="text-gray-600 text-sm">{instructor.title}</p>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="ml-2 text-gray-800 text-sm font-medium">
                      {instructor.rating}
                    </span>
                  </div>
                  <div>
                    <span className="ml-2 text-gray-800 text-sm font-medium">
                      {instructor.students}
                    </span>
                    <span className="ml-2 text-gray-800 text-sm">students</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTeacher;
