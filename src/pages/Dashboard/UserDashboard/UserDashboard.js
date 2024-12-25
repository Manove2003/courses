import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import EventCard from "./EventCard";
import PastEventCard from "./PastEventCard";
import img1 from "../../../assests/s1.png";
import img2 from "../../../assests/s2.png";
import img3 from "../../../assests/s3.png";
import img4 from "../../../assests/s4.png";
import img5 from "../../../assests/s5.png";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const events = [
    {
      title: "Event Name Here",
      description:
        "Here are short description about the event so user can easily know about the event!",
      imgSrc: img1,
      tag: "3 DAYS LEFT",
    },
    {
      title: "Event Name Here",
      description:
        "Here are short description about the event so user can easily know about the event!",
      imgSrc: img2,
      tag: "3 DAYS LEFT",
    },
    {
      title: "Event Name Here",
      description:
        "Here are short description about the event so user can easily know about the event!",
      imgSrc: img3,
      tag: "3 DAYS LEFT",
    },
  ];
  const pastevents = [
    {
      title: "Event Name Here",
      description:
        "Here are short description about the event so user can easily know about the event!",
      imgSrc: img4,
      tag: "Closed",
    },
    {
      title: "Event Name Here",
      description:
        "Here are short description about the event so user can easily know about the event!",
      imgSrc: img5,
      tag: "Closed",
    },
  ];

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0 md:ml-64"
        }`}
      >
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                description={event.description}
                imgSrc={event.imgSrc}
                tag={event.tag}
              />
            ))}
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Past Events</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastevents.map((event, index) => (
              <PastEventCard
                key={index}
                title={event.title}
                description={event.description}
                imgSrc={event.imgSrc}
                tag={event.tag}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
