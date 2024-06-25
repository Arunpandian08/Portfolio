import React, { useRef } from "react";
import ProfileSection from "../../Components/ProfileSection/ProfileSection";
import About from "../../Components/AboutSection/About";
import Skills from "../../Components/SkillsSection/Skills";
import Project from "../../Components/ProjectsSection/Project";
import Resume from "../../Components/ResumeSection/Resume";
import Contact from "../../Components/ContactSection/Contact";
import Footer from "../../Components/Footer/Footer";
import ScrollToTop from "../../Utilities/ScrollToTop/ScrollToTop";

const Home = () => {
  const profileRef = useRef(null) 
  
  return (
    <>
    <div ref={profileRef}>
      <ProfileSection />
    </div>
      <ScrollToTop profileRef={profileRef} />
      <About />
      <Skills />
      <Project />
      <Resume />
      <Contact />
      <Footer />
      
    </>
  );
};

export default Home;
