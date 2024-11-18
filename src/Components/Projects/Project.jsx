import React, { useEffect, useRef } from 'react'
import './project.css'
import ProjectCard from './ProjectCard/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
    const projectLayoutRef = useRef(null)
    const projectTitleRef = useRef(null)
    const paraRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: projectLayoutRef.current,
                start: 'top bottom',
                end: 'top center',
                scrub: 1,
                toggleActions: "play none none none"
            }
        });

        tl.fromTo(projectTitleRef.current,
            { x: '100%' },
            {
                x: '0%',
                duration: 1,
                ease: 'power2.inOut'
            }
        );

        tl.fromTo(paraRef.current,
            { x: '-100%' },
            {
                x: '0%',
                duration: 1,
                ease: 'power2.inOut'
            }
        );

        // Cleanup
        return () => {
            const st = ScrollTrigger.getAll().find(t => t.vars.trigger === projectLayoutRef.current)
            if (st) st.kill()
        }
    }, [])
    return (
        <div className='project-layout' ref={projectLayoutRef}>
            <div className="heading">
                <div className="title" ref={projectTitleRef}>
                    <h1 className="big">Projects</h1>
                    <h2 className="big-2">Projects</h2>
                </div>
                <p className="para"ref={paraRef}>Here are some of the projects I have worked on recently.</p>
            </div>
           <ProjectCard /> 
        </div>
    )
}

export default Project