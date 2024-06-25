import React, { useEffect } from "react";
import "./skills.css";
import htmlIcon from "../../assets/SkillsSectionImages/html.png";
import cssIcon from "../../assets/SkillsSectionImages/css.png";
import jsIcon from "../../assets/SkillsSectionImages/javascript.png";
import bootstrapIcon from "../../assets/SkillsSectionImages/bootstrap.png";
import nodeJsIcon from "../../assets/SkillsSectionImages/nodeJs.png";
import tailwindIcon from "../../assets/SkillsSectionImages/tailwind.png";
import mongoDbIcon from "../../assets/SkillsSectionImages/mongoDb.png";
import gitIcon from "../../assets/SkillsSectionImages/git.png";
import gitHubIcon from "../../assets/SkillsSectionImages/gitHub.png";
import mySqlIcon from "../../assets/SkillsSectionImages/mySQL.png";
import expressJsIcon from "../../assets/SkillsSectionImages/expressJs.png";
import reactJsIcon from "../../assets/SkillsSectionImages/reactJs.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from 'react-parallax-tilt'

gsap.registerPlugin(ScrollTrigger);

const icons = [
  htmlIcon,
  cssIcon,
  jsIcon,
  reactJsIcon,
  bootstrapIcon,
  tailwindIcon,
  nodeJsIcon,
  expressJsIcon,
  mongoDbIcon,
  gitIcon,
  gitHubIcon,
  mySqlIcon,
];

const Skills = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Heading animation
    gsap.fromTo(
      ".skills-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".skills-title",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // Paragraph animation
    gsap.fromTo(
      ".para",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".para",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // Icon container animation with stagger
    gsap.fromTo(
      ".icon-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".content-area",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="skills-section" className="skills-container">
      <article className="skills-heading-section">
        <div className="skills-title">
          <h1 className="big big-2">Skills</h1>
          <h2 className="title-2">Skills</h2>
        </div>
        <p className="para">
          I am a passionate Full Stack Developer with expertise in the MERN
          stack. I thrive on creating innovative web solutions and have a keen
          interest in learning new technologies and improving my skills.
        </p>
      </article>
      <article className="content-area">
        {icons.map((icon, index) => (
          <Tilt key={index}
            className="icon-container"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.01}
          >
            <img width="30px" height="40px" src={icon} alt="Skill Icon" />
          </Tilt>
        ))}
      </article>
    </section>
  );
};

export default Skills;
