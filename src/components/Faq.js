import React, { useState } from "react";

const faqs = [
  {
    question: "What types of courses do you offer for Discord server owners?",
    answer:
      "We offer a variety of courses tailored to different levels of experience and needs. Our courses cover everything from basic server setup to advanced strategies for growing your community, increasing engagement, and monetizing your Discord server. Whether you’re a beginner or an experienced server owner.",
  },
  {
    question: "How can I get started with your courses?",
    answer:
      "You can get started by signing up on our platform and browsing our course catalog to find the course that suits your needs.",
  },
  {
    question:
      "Do your courses cover advanced topics for experienced server owners?",
    answer:
      "Yes, we offer advanced courses for experienced server owners, including monetization strategies, community management, and technical setups.",
  },
  {
    question: "Are the courses live or pre-recorded?",
    answer:
      "Our courses are pre-recorded, allowing you to learn at your own pace.",
  },
  {
    question: "How long will it take to see results from the course content?",
    answer:
      "The time to see results depends on your efforts and how quickly you apply the knowledge gained. Most users see improvements within a few weeks.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-12 mb-12">
      <h1 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-2 border-solid border-[#3EA190] rounded-lg overflow-hidden shadow-sm transition-all duration-300 ease-in-out ${
              activeIndex === index ? "bg-blue-100" : "bg-blue-50"
            }`}
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center p-4 cursor-pointer"
            >
              <h2 className="font-medium">{faq.question}</h2>
              <span
                className={`text-lg font-bold transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-blue-100 text-sm">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
