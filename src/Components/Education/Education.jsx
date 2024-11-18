import React, { useEffect, useRef } from 'react';
import './education.css';
import objData from '../../Helper/dataStore';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const { eductionData } = objData;
  const titleRef = useRef(null);

  useEffect(() => {
    //title animation 
    gsap.fromTo(titleRef.current, {
      opacity: 0,
      scale: 0.5,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      scale:1,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger:{
        trigger: titleRef.current,
          start: 'top bottom',
          end: 'top center',
          scrub: true,
        }
    });
    // Timeline animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 60%', 
        end: 'bottom 60%',
        scrub: true
      }
    });

    // Animate the timeline line and the container opacity together
    tl.to('.timeline-line', {
      height: '100%', 
      duration: 5,
      ease: 'none',
    });

    gsap.utils.toArray('.container').forEach((container, index) => {
      // Animate each container with a staggered effect
      gsap.fromTo(container, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: container, 
          start: 'top 70%', 
          end: 'top 30%',
          scrub: true,
          toggleActions: 'play none none none',
        },
      });

      // Animate each text box within the container with stagger
      const textBoxes = container.querySelectorAll('.text-box');
      gsap.fromTo(textBoxes, {
        opacity: 0,
        y: 20,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.5, 
        ease: 'power1.out',
        stagger: 0.3, 
        scrollTrigger: {
          trigger: container, 
          start: 'top 70%',
          end: 'top 30%',
          scrub: true,
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);

  return (
    <div className='eduction-content'>
      <div className="heading" style={{margin:'2rem 0'}} >
        <div className="title" ref={titleRef}>
          <h1 className="big">Education</h1>
          <h2 className="big-2">Education</h2>
        </div>
      </div>
      <div className="timeline">
        <div className="timeline-line"></div>
        {eductionData?.map((data, index) => (
          <div className={`container ${index % 2 === 0 ? 'left-container' : 'right-container'}`} key={data.id}>
            <img src={data.logo} loading='lazy' width='100' height='100' alt={data.institute} />
            <div className="text-box">
              <h2>{data.course}</h2>
              <h4>{data.institute}</h4>
              <small>{data.year}</small>
              <p>{data.description}</p>
              <span className={`${index % 2 === 0 ? 'left-container-arrow' : 'right-container-arrow'}`}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
