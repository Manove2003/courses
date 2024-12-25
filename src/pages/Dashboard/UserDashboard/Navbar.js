import { FaBell } from "react-icons/fa"; // Importing search and bell icons
import dashboardimg from "../../../assests/dashboard profileimg.png";

const Navbar = ({ toggleSidebar }) => (
  <div className="flex justify-between items-left bg-white p-4 shadow-md">
    <button
      className="text-teal-500 text-2xl md:hidden"
      onClick={toggleSidebar}
    >
      ☰
    </button>
    <div>
      <h1 className="text-xl font-bold">Good Morning</h1>
      <p className="text-gray-500">My Courses</p>
    </div>
    <div className="flex items-center gap-4">
      {/* Search Bar with Search Icon inside */}
      <div className="relative w-40 md:w-60 hidden md:block">
        <button className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 pr-4 hover:text-teal-500">
          <i className="fas fa-search"></i>
        </button>
        <input
          type="text"
          placeholder="Search for teachers"
          className="border ml-1 pl-8 pr-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <button className="relative">
        <FaBell className="h-6 w-6 text-gray-600" />
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          3
        </span>
      </button>

      <div className="flex items-center">
        <img src={dashboardimg} alt="User" className="h-10 w-10 rounded-full" />
      </div>
    </div>
  </div>
);

export default Navbar;
