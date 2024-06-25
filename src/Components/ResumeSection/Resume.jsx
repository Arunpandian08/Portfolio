import React, { useEffect } from "react";
import "./resume.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import objData from "../../Utilities/ProjectsData/data";
import Tilt from 'react-parallax-tilt'

const { eductionData } = objData;

const Resume = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Heading animation
    gsap.fromTo(
      ".resume-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".resume-title",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // Paragraph animation
    gsap.fromTo(
      ".resume-heading-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".para",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // Icon container animation with stagger
    gsap.fromTo(
      ".resume-wrap",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contents",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <section id="resume-section" className="resume-container">
      <article className="resume-heading-section">
        <div className="resume-title">
          <h1 className="big big-2">Resume</h1>
          <h2 className="title-2">Resume</h2>
        </div>
        <p className="para">Here is a summary of my educational background</p>
      </article>
      <article className="resume-content-container">
        <div className="contents">
          {eductionData.map((item) => {
            return (

              <Tilt
                key={item.id}
                className="resume-wrap parallax-effect-img"
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.01}
              >
                <p className="date">{item.year}</p>
                <h3>{item.course}</h3>
                <p className="position">{item.institute}</p>
                <p className="desc">{item.description}</p>
              </Tilt>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default Resume;
