import React from "react";
import "./backgroundAnimation.css";

const BackgroundAnimation = () => {
  return (
    <div className="background">
      <div className="background">
        {Array.from({ length: 50 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation;
