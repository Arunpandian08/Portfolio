import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './aboutMe.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    const componentRef = useRef(null);
    const titleRef = useRef(null);
    const listItemsRef = useRef([]);

    useEffect(() => {
        const component = componentRef.current;
        const title = titleRef.current;
        const listItems = listItemsRef.current;

        // Function to run the animation
        const runAnimation = () => {
            const tl = gsap.timeline({ delay: 0.5 });

            // Fade in the entire component
            tl.to(component, { opacity: 1, duration: 0.5 });

            // Title animation
            tl.fromTo(title,
                { rotationX: -90, opacity: 0 },
                { rotationX: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );

            // List items wave animation
            tl.fromTo(listItems,
                { y: 50, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.8, 
                    stagger: 0.2, 
                    ease: "power3.out",
                }
            );

            return tl;
        };

        // Run initial animation
        const initialAnimation = runAnimation();

        // Set up ScrollTrigger
        const trigger = ScrollTrigger.create({
            trigger: component,
            start: "top 80%", // 20% from the top
            end: "bottom 20%", // 20% from the bottom
            onEnter: () => {
                if (initialAnimation.progress() === 1) {
                    runAnimation();
                }
            },
            onLeave: () => {
                gsap.to(component, { opacity: 0, duration: 0.5 });
            },
            onEnterBack: runAnimation,
            onLeaveBack: () => {
                gsap.to(component, { opacity: 0, duration: 0.5 });
            },
        });

        // Cleanup function
        return () => {
            initialAnimation.kill();
            trigger.kill();
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="about-content" ref={componentRef} style={{ opacity: 0 }}>
            <div className="heading">
                <div className="title" ref={titleRef}>
                    <h1 className="big">About Me</h1>
                    <h2 className="big-2">About Me !</h2>
                </div>
            </div>
            <ul className="about-details">
                <li className="point-1" ref={el => listItemsRef.current[0] = el}>
                    I am a passionate <strong>Full Stack Developer</strong> with expertise in the{' '}
                    <strong>
                        <abbr title="MongoDB - ExpressJS - ReactJS - NodeJS">MERN</abbr>
                    </strong>{' '}
                    stack. I thrive on creating innovative web solutions and have a keen{' '}
                    <strong>interest in learning new technologies</strong> and improving my technical skills.
                </li>
                <li className="point-2" ref={el => listItemsRef.current[1] = el}>
                    I'm skilled in developing <strong>Web Applications</strong>, utilizing technologies like{' '}
                    <strong>
                        <abbr title="HyperText Markup Language">HTML5</abbr>, <abbr title="Cascading Style Sheets">CSS3</abbr>,
                        JavaScript, React JS, Bootstrap, Tailwind CSS.
                    </strong>
                </li>
                <li className="point-3" ref={el => listItemsRef.current[2] = el}>
                    Additionally, I have strong skills in <strong>Back-End development</strong> using{' '}
                    <strong>NodeJS</strong> and <strong>ExpressJS.</strong> I follow the{' '}
                    <strong>
                        <abbr title="Model-View-Controller">MVC</abbr>
                    </strong>{' '}
                    pattern and have experience integrating both{' '}
                    <strong>
                        <abbr title="Non-Relational Database Management Systems">NoSQL</abbr>
                    </strong>{' '}
                    and{' '}
                    <strong>
                        <abbr title="Relational Database Management Systems">RDBMS</abbr>
                    </strong>
                    .
                </li>
                <li className="point-4" ref={el => listItemsRef.current[3] = el}>
                    I ensure that my applications are built with efficient state management and secure{' '}
                    <strong>
                        <abbr title="Representational State Transfer Application Programming Interface">RESTful API</abbr>
                    </strong>{' '}
                    integration.
                </li>
            </ul>
        </div>
    )
};

export default AboutMe