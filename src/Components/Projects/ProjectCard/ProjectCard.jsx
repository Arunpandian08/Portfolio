import React, { useEffect } from 'react'
import './projectCard.css'
import objData from '../../../Helper/dataStore'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ProjectCard = () => {
    const { projectsData } = objData

    useEffect(() => {
        const projectCards = document.querySelectorAll('.project-card')
        
        projectCards.forEach((card) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        toggleActions: 'play none none none',
                    },
                }
            )
        })
    }, [])

    return (
        <div className='card-container'>
            {projectsData?.map((project, index) => (
                <div className="project-card-container" key={project.id}>
                    <div className="project-card">
                        <div className="img-content">
                            <img src={project.image} alt={project.title} />
                            <div className="tech-lists">
                                {project.tech.map((tech, index) => (
                                    <button className='tech-btn' key={index}>
                                        {tech}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="content">
                            <h4 className="heading">{project.title}</h4>
                            <ul className="desc">
                                {project.desc.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                            <div className="git-links">
                                <a href={project.frontend} className="front-btn" target="_blank" rel="noopener noreferrer">Frontend</a>
                                <a href={project.backend} className="back-btn" target="_blank" rel="noopener noreferrer">Backend</a>
                            </div>
                            <div className="preview">
                                <a className='preview-btn' href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <i className='fa-solid fa-link'></i>&nbsp;Live Preview
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCard
