import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import "./scrollToTop.css";

const ScrollToTop = ({ profileRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);

  const handleVisibilityChange = useCallback((entries) => {
    entries.forEach((entry) => {
      const shouldShow = !entry.isIntersecting;
      setIsVisible((prevVisible) => (prevVisible !== shouldShow ? shouldShow : prevVisible));
    });
  }, []);

  const observerOptions = useMemo(() => ({ threshold: 1 }), []);

  useEffect(() => {
    const currentObserver = new IntersectionObserver(handleVisibilityChange, observerOptions);
    observer.current = currentObserver;

    if (profileRef.current) {
      currentObserver.observe(profileRef.current);
    }

    return () => {
      if (currentObserver && profileRef.current) {
        currentObserver.disconnect();
      }
    };
  }, [profileRef, handleVisibilityChange, observerOptions]);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    isVisible && (
      <button
        className="scroll-to-top animate__animated animate__bounceInDown"
        onClick={handleScrollToTop}
      >
        <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
        </svg>
        <p className="text">Back to Top</p>
      </button>
    )
  );
};

export default ScrollToTop;
