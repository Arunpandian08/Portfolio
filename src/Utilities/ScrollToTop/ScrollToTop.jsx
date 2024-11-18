import React, { useState, useEffect, useCallback, useRef } from "react";
import { gsap } from "gsap";
import "./scrollToTop.css";

const ScrollToTop = ({ skillsRef, lenis }) => {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);
  const buttonRef = useRef(null);

  const handleVisibilityChange = useCallback((entries) => {
    entries.forEach((entry) => {
      // Check if the entry is intersecting
      if (entry.isIntersecting) {
        // Hide the button if in the profile section, show otherwise
        if (entry.target.id === 'profile-section') {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    });
  }, []);

  useEffect(() => {
    const currentObserver = new IntersectionObserver(handleVisibilityChange, { threshold: 0.1 });
    observer.current = currentObserver;

    if (skillsRef.current) {
      currentObserver.observe(skillsRef.current);
    }

    // Observe the profile section as well
    const profileSection = document.getElementById('profile-section');
    if (profileSection) {
      currentObserver.observe(profileSection);
    }

    return () => {
      if (currentObserver && skillsRef.current) {
        currentObserver.disconnect();
      }
    };
  }, [skillsRef, handleVisibilityChange]);

  useEffect(() => {
    if (buttonRef.current) {
      if (isVisible) {
        gsap.to(buttonRef.current, {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(buttonRef.current, {
          y: -1000,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        });
      }
    }
  }, [isVisible]);

  const handleScrollToTop = useCallback(() => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 2,
        easing: (t) => Math.sin((t * Math.PI) / 2),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });
    }
    if (window.screenTop(0)) {
      setIsVisible(false);
    }
  }, [lenis]);

  return (
    <button
      ref={buttonRef}
      className="scroll-to-top"
      onClick={handleScrollToTop}
      style={{ opacity: isVisible ? 1 : 0 }} 
    >
      <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
      </svg>
      <p className="text">Back to Top</p>
    </button>
  );
};

export default ScrollToTop;
