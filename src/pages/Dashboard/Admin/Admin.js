import React, { useState } from "react";
import Navbar from "../UserDashboard/Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [botStatus, setBotStatus] = useState([
    {
      name: "Bot1",
      lastActive: "3 days ago",
      status: "Not Active",
      uptime: "In 2 days",
    },
    {
      name: "Bot2",
      lastActive: "3 days ago",
      status: "Active",
      uptime: "Currently Up",
    },
    {
      name: "Bot3",
      lastActive: "3 days ago",
      status: "Not Active",
      uptime: "In 2 days",
    },
  ]);

  const [applications, setApplications] = useState([
    {
      name: "Application 1",
      type: "Teacher",
      reviewedOn: "1 day ago",
      status: "Pending",
    },
    {
      name: "Application 2",
      type: "Server",
      reviewedOn: "Just Now",
      status: "Pending",
    },
    {
      name: "Application 3",
      type: "Teacher",
      reviewedOn: "Just Now",
      status: "Pending",
    },
    {
      name: "Application 4",
      type: "Server",
      reviewedOn: "Just Now",
      status: "Pending",
    },
  ]);

  const handleApplicationAction = (index, action) => {
    setApplications((prevState) =>
      prevState.map((app, i) =>
        i === index ? { ...app, status: action } : app
      )
    );
  };

  const countByStatus = (status) =>
    applications.filter((app) => app.status === status).length;

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0 md:ml-64"
        }`}
      >
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="p-4 sm:p-6">
          {/* Application Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-100 p-4 rounded shadow text-center">
              <h3 className="text-sm sm:text-lg font-semibold">Accepted</h3>
              <p className="text-xl sm:text-2xl font-bold">
                {countByStatus("Accepted")}
              </p>
            </div>
            <div className="bg-red-100 p-4 rounded shadow text-center">
              <h3 className="text-sm sm:text-lg font-semibold">Rejected</h3>
              <p className="text-xl sm:text-2xl font-bold">
                {countByStatus("Rejected")}
              </p>
            </div>
            <div className="bg-yellow-100 p-4 rounded shadow text-center">
              <h3 className="text-sm sm:text-lg font-semibold">Pending</h3>
              <p className="text-xl sm:text-2xl font-bold">
                {countByStatus("Pending")}
              </p>
            </div>
          </div>

          {/* Bots Status */}
          <div className="mb-6 overflow-x-auto">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              Bots Status
            </h2>
            <table className="w-full bg-white rounded shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-sm sm:text-base text-left">
                    <span className="text-yellow-500 mr-2">⚡</span> Bot Name
                  </th>
                  <th className="p-2 text-sm sm:text-base text-left">
                    Last Active
                  </th>
                  <th className="p-2 text-sm sm:text-base text-left">Status</th>
                  <th className="p-2 text-sm sm:text-base text-left">Uptime</th>
                </tr>
              </thead>
              <tbody>
                {botStatus.map((bot, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 text-sm sm:text-base flex items-center">
                      <span className="text-yellow-500 mr-2">⚡</span>
                      {bot.name}
                    </td>
                    <td className="p-2 text-sm sm:text-base">
                      {bot.lastActive}
                    </td>
                    <td className="p-2 text-sm sm:text-base">
                      <span
                        className={`px-2 py-1 rounded block border ${
                          bot.status === "Active"
                            ? "text-teal-500 border-teal-500"
                            : "text-red-500 border-red-500"
                        }`}
                      >
                        {bot.status}
                      </span>
                    </td>
                    <td
                      className={`p-2 text-sm sm:text-base ${
                        bot.status === "Active" ? "text-teal-500" : ""
                      }`}
                    >
                      {bot.uptime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Applications From Servers & Teachers */}
          <div className="overflow-x-auto">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              Applications From Servers & Teachers
            </h2>
            <table className="w-full bg-white rounded shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-sm sm:text-base text-left">
                    <span className="text-yellow-500 mr-2">⚡</span> Application
                    Name
                  </th>
                  <th className="p-2 text-sm sm:text-base text-left">
                    Application Type
                  </th>
                  <th className="p-2 text-sm sm:text-base text-left">
                    Reviewed On
                  </th>
                  <th className="p-2 text-sm sm:text-base text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 flex items-center text-sm sm:text-base">
                      <span className="text-yellow-500 mr-2">⚡</span>
                      {app.name}
                    </td>
                    <td className="p-2 text-sm sm:text-base">{app.type}</td>
                    <td className="p-2 text-sm sm:text-base">
                      {app.reviewedOn}
                    </td>
                    <td className="p-2 flex flex-wrap justify-start space-x-2">
                      <button
                        className="px-3 py-1 sm:px-4 sm:py-2 bg-green-500 text-white rounded w-full sm:w-auto"
                        onClick={() =>
                          handleApplicationAction(index, "Accepted")
                        }
                      >
                        Accept
                      </button>
                      <button
                        className="px-3 py-1 sm:px-4 sm:py-2 bg-red-500 text-white rounded w-full sm:w-auto"
                        onClick={() =>
                          handleApplicationAction(index, "Rejected")
                        }
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
