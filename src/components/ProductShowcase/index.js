import React, { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./productShowcase.css";

const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });
  return (
    <div
      className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`}
      scale-in-bottom
      ref={ref}
    >
      {showAnimation && (
        <div className="showcase-wrapper">
          <img
            src="https://foodnow.ng/wp-content/uploads/2022/02/left2-11.png"
            className="showcase-ui showcase-mockup-1"
          />
          <img
            src="https://foodnow.ng/wp-content/uploads/2022/02/left-1.png"
            className="showcase-ui showcase-mockup-2"
          />
          <img
            src="https://foodnow.ng/wp-content/uploads/2022/02/centre1.png"
            className="showcase-ui showcase-mockup-3"
          />
          <img
            src="https://foodnow.ng/wp-content/uploads/2022/02/right.png"
            className="showcase-ui showcase-mockup-4"
          />
          <img
            src="https://foodnow.ng/wp-content/uploads/2022/02/live-tracking1.png"
            className="showcase-ui showcase-mockup-5"
          />
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
