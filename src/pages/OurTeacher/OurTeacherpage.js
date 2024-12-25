import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TopInstructors from "../../pages/OurTeacher/TopTeacher";
import ExperienceTeacher from "./ExperienceTeacher";
import InstructorForm from "./InstructorForm";

const OurTeacherpage = () => {
  return (
    <div>
      <Navbar />
      <TopInstructors />
      <ExperienceTeacher />
      <Footer />
    </div>
  );
};

export default OurTeacherpage;
