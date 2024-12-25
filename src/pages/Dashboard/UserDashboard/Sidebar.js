import { FaChartBar } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-teal-500 z-50 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-64 md:translate-x-0`}
    >
      <div className="p-4 flex justify-between items-center">
        <button className="text-white md:hidden block" onClick={toggleSidebar}>
          ✖
        </button>
      </div>
      <div className="flex flex-col gap-6 mt-10">
        <div className="flex items-center text-white text-sm cursor-pointer pl-3">
          <FaChartBar className="mr-2 text-2xl" />
          <span>UserDashboard</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
