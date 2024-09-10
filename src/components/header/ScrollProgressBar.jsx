import React, { useEffect, useRef } from "react";

const ScrollProgressBar = () => {
  const progressBarRef = useRef(null);
  const rafRef = useRef(null);
  const prevScrollRef = useRef(0);

  useEffect(() => {
    let scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const handleResize = () => {
      scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    };

    const updateProgressBar = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - prevScrollRef.current) > 5) {
        const progress = Math.min((scrollY / scrollHeight) * 100, 100);
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${progress}%`;
        }
        prevScrollRef.current = scrollY;
      }
      rafRef.current = requestAnimationFrame(updateProgressBar);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    rafRef.current = requestAnimationFrame(updateProgressBar);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-primary-gray z-50">
      <div
        ref={progressBarRef}
        className="h-full bg-primary-text transform-gpu"
        style={{ width: "0%", willChange: "width" }}
      />
    </div>
  );
};

export default ScrollProgressBar;
