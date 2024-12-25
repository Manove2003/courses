import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import s1 from "../../assests/s1.png";
import s2 from "../../assests/s2.png";
import s3 from "../../assests/s3.png";
import s4 from "../../assests/s4.png";
import s5 from "../../assests/s5.png";

const ScheduledEvents = () => {
  const events = [
    {
      id: 1,
      name: "Event Name Here",
      date: "2024-4-14",
      time: "12:00 PM TO 2 PM",
      description:
        "Here add a short description about the event so users can easily know about the event!",
      image: s1,
    },
    {
      id: 2,
      name: "Event Name Here",
      date: "2024-4-14",
      time: "12:00 PM TO 2 PM",
      description:
        "Here add a short description about the event so users can easily know about the event!",
      image: s2,
    },
    {
      id: 3,
      name: "Event Name Here",
      date: "2024-4-14",
      time: "12:00 PM TO 2 PM",
      description:
        "Here add a short description about the event so users can easily know about the event!",
      image: s3,
    },
    {
      id: 4,
      name: "Event Name Here",
      date: "2024-4-14",
      time: "12:00 PM TO 2 PM",
      description:
        "Here add a short description about the event so users can easily know about the event!",
      image: s4,
    },
    {
      id: 5,
      name: "Event Name Here",
      date: "2024-4-14",
      time: "12:00 PM TO 2 PM",
      description:
        "Here add a short description about the event so users can easily know about the event!",
      image: s5,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <h1 className="text-center text-2xl font-bold mb-8">
          Here You Can Explore All Your Scheduled Events!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-12 ">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-lg overflow-hidden mx-2 sm:mx-0"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 sm:px-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-teal-500 text-sm font-medium bg-teal-100 p-1 rounded">
                    {event.time}
                  </span>
                  <span className="text-teal-500 text-sm">{event.date}</span>
                </div>
                <h2 className="text-lg font-semibold mb-2">{event.name}</h2>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ScheduledEvents;
