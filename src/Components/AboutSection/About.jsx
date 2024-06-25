import React, { useEffect } from "react";
import "./about.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from 'react-parallax-tilt'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Heading animation
    gsap.fromTo(
      ".title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".title",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // About content animation
    gsap.fromTo(
      ".about-content",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // Image container animation
    gsap.fromTo(
      ".image-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".image-container",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // Paragraph line-by-line animation
    gsap.fromTo(
      ".para",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".para",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="about-container" id="about-section">
      <div className="heading-section">
        <div className="title">
          <h1 className="big big-2">About Me</h1>
          <h2 className="title-2">About Me !</h2>
        </div>
        <p className="para">
          I am a passionate Full Stack Developer with expertise in the MERN
          stack. I thrive on creating innovative web solutions and have a keen
          interest in learning new technologies and improving my skills.
        </p>
      </div>
      <div className="row">
        <article className="about">
          <div className="about-content">
            <p className="para" style={{ opacity: "1" }}>
              Passionate MERN Stack Developer (Fresher) | Skilled in{" "}
              <span>Frontend technologies</span> like{" "}
              <strong> HTML, CSS, JavaScript, ReactJS, Bootstrap,</strong> with
              a touch of<strong> Tailwind CSS.</strong> <br /> Proficient in{" "}
              <span>Backend development</span> using{" "}
              <strong>
                Node.js and Express.js, with experience in user management,
                authentication, authorization, and MongoDB integration
              </strong>
              . Basic knowledge of MySQL.
            </p>
          </div>
        </article>
        <Tilt
          className="parallax-effect-img"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.051}
        >

          <article className="image-container">
            <img src="/about-section.png" width="450px" height="400px" alt="" />
          </article>
        </Tilt>
      </div>
    </section>
  );
};

export default About;
