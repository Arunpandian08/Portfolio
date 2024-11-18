import React, { useEffect, useRef } from 'react';
import './carousel.css';
import objData from '../../../Helper/dataStore';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
    const { frontendCarousel, backendCarousel } = objData;
    console.log(frontendCarousel);
    const frontendRef = useRef(null);
    const backendRef = useRef(null);

    useEffect(() => {
        const setupScrollAnimation = (ref, direction = 'left') => {
            const distance = ref.current.scrollWidth / 3;

            gsap.fromTo(
                ref.current,
                { x: direction === 'left' ? 0 : -distance },
                {
                    x: direction === 'left' ? -distance : 0,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: 1,
                        pin: false,
                        invalidateOnRefresh: true,
                    },
                    ease: 'none',
                }
            );
        };

        if (frontendRef.current) {
            setupScrollAnimation(frontendRef, 'left');
        }
        if (backendRef.current) {
            setupScrollAnimation(backendRef, 'right');
        }
    }, []);

    return (
        <div className="carousel-container">
            {/* Frontend Carousel */}
            <div className="stack-carousel" ref={frontendRef}>
                {[...frontendCarousel, ...frontendCarousel]?.map((stack, index) => (
                    <img key={`frontend-${index}`} src={stack} alt={`frontend-${index}`} />
                ))}
            </div>
            <hr />
            {/* Backend Carousel */}
            <div className="stack-carousel" ref={backendRef}>
                {[...backendCarousel, ...backendCarousel]?.map((stack, index) => (
                    <img key={`backend-${index}`} src={stack} alt={`backend-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
