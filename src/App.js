import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Homepage";
import OurTeacherpage from "./pages/OurTeacher/OurTeacherpage";
import InstructorDetail from "./pages/OurTeacher/InstructorDetail";
import InstructorForm from "./pages/OurTeacher/InstructorForm";
import ServerForm from "./components/ServerForm";
import ScheduledEvents from "./pages/ScheduledEvents/ScheduledEvents";
import FaqPage from "./pages/Faqpage/FaqPage";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import UserDashboard from "./pages/Dashboard/UserDashboard/UserDashboard";
import ServerDashboard from "./pages/Dashboard/ServerDashboard/ServerDashboard";
import AdminDashboard from "./pages/Dashboard/Admin/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-teachers" element={<OurTeacherpage />} />
        <Route path="/instructor/:id" element={<InstructorDetail />} />
        <Route path="/become-instructor" element={<InstructorForm />} />
        <Route path="/become-server" element={<ServerForm />} />
        <Route path="/events" element={<ScheduledEvents />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="/Signin" element={<SigninForm />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/ServerDashboard" element={<ServerDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
