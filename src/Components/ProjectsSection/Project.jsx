import React, { useEffect } from "react";
import "./project.css";
import objData from "../../Utilities/ProjectsData/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = () => {
  const { projectsData } = objData;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for heading section
    gsap.fromTo(
      ".project-heading-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".project-heading-section",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for project rows
    gsap.utils.toArray(".project-content .project-row").forEach((row, index) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: row,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          // delay: index * 0.1,
        }
      );
    });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <section id="project-section" className="project-container">
      <article className="project-heading-section">
        <div className="project-title">
          <h1 className="big big-2">Projects</h1>
          <h2 className="title-2">My Projects</h2>
        </div>
        <p className="para">
          Here are some of the projects I have worked on recently.
        </p>
      </article>
      <article className="project-content">
        {projectsData.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </article>
    </section>
  );
};

const ProjectRow = ({ project, index }) => (
  <div className={`project-row ${index % 2 === 0 ? "left-image" : "right-image"}`}>
    <div className="project-image">
      <img width="80%" height="350px" src={project.image} alt={project.title} />
    </div>
    <div className="project-details">
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <div className="project-links">
        <div className="code-link">
          <a href={project.frontend} target="_blank" rel="noopener noreferrer">
            Frontend Code &nbsp; 
          </a>
          <span>&nbsp; | &nbsp;</span>
          <a href={project.backend} target="_blank" rel="noopener noreferrer">
            Backend Code &nbsp; 
          </a>
        </div>
        <div className="demo-btn">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
          <button className="rainbow-hover">
             <span className="sp">Live Demo</span>
          </button>
            </a>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
