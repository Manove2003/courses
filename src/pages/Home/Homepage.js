import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import TopInstructors from "../../components/TopInstructors";
import OurStory from "../../components/OurStory";
import MissionComponent from "../../components/MissionComponent";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopInstructors />
      <OurStory />
      <MissionComponent />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
