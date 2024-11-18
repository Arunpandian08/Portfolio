import React, { useEffect, useRef } from 'react'
import './skills.css'
import objData from '../../Helper/dataStore'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Carousel from './StackCarousel/Carousel'

gsap.registerPlugin(ScrollTrigger)

const { techStackImages, frontEndSkills, backEndSkills } = objData

const Skills = () => {
    const titleRef = useRef(null)
    const bannerRef = useRef(null)
    const frontendRef = useRef(null)
    const backendRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: bannerRef.current,
                start: 'top bottom',
                end: 'bottom 60%',
                scrub: 1,
                toggleActions: "play none none none"
            }
        });

        tl.fromTo(titleRef.current,
            { x: '-100%' },
            {
                x: '0%',
                duration: 1,
                ease: 'power2.inOut'
            }
        );

        // Function to animate list items
        const animateListItems = (listRef, delay = 0) => {
            const listItems = listRef.current.querySelectorAll('li,h5');
            gsap.fromTo(listItems,
                { rotationX: -90, opacity: 0, y: 20 },
                {
                    rotationX: 0,
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    delay: delay,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: 'top 90%',
                        end: 'bottom 10%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        };

        // Animate frontend skills
        animateListItems(frontendRef);

        // Animate backend skills with a delay
        animateListItems(backendRef, 0.5);


        // Cleanup
        return () => {
            const st = ScrollTrigger.getAll().find(t => t.vars.trigger === bannerRef.current)
            if (st) st.kill()
        }
    }, [])

    return (
        <>
            <div className="banner" ref={bannerRef}>
                <div className="slider" style={{ '--quantity': techStackImages.length }}>
                    {techStackImages.map((img, index) => (
                        <div className="item" key={index} style={{ '--position': index + 1 }}>
                            <img src={img.src} alt={img.alt} />
                        </div>
                    ))}
                </div>
                <div className="content">
                    <h1 ref={titleRef} data-content="TECH STACKS">TECH STACKS</h1>
                    <div className="skill-text">
                        <ul ref={frontendRef}>
                            <h5>Frontend</h5>
                            <hr />
                            {frontEndSkills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <ul ref={backendRef}>
                            <h5>Backend</h5>
                            <hr />
                            {backEndSkills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="model"></div>
                </div>
            </div>
            <Carousel />
        </>
    )
}

export default Skills