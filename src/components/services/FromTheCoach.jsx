import React, { useState, useRef } from "react";
import { fromTheCoachData } from "../../data/data";
import svg from "../../assets/Live-collaboration.svg";

const FromTheCoach = () => {
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef(null);

  const handleReadMore = () => {
    setShowMore(true);
    setTimeout(() => {
      contentRef.current.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="flex flex-col md:flex-row-reverse bg-white">
      <div className="w-full md- h-64 md:h-[500px] bg-primary-gray">
        <img src={svg} alt="" />
      </div>
      <div className="w-full p-4 md:p-8 relative">
        <div
          ref={contentRef}
          className="overflow-y-auto max-h-[300px] md:max-h-[400px] pr-4"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 85%, transparent 100%)",
          }}
        >
          <h2 className="text-base md:text-large uppercase text-gray-600 mb-2">
            Why us?
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            From The Founder & Director{" "}
            <span className="text-primary-text"> Santosh kumar Pandey</span>
          </h1>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            {fromTheCoachData.description}
          </p>

          {showMore && (
            <>
              <p className="text-sm md:text-base text-gray-700 mb-4">
                {fromTheCoachData.moreDescription[0]}
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-4">
                {fromTheCoachData.moreDescription[1]}
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-4">
                {fromTheCoachData.moreDescription[2]}
              </p>
            </>
          )}
        </div>
        {!showMore && (
          <button
            onClick={handleReadMore}
            className="mt-4 md:absolute md:bottom-8 md:left-8 bg-primary-text text-white px-4 md:px-6 py-2 rounded-full hover:bg-opacity-90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-text focus:ring-opacity-50 text-sm md:text-base"
          >
            READ MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default FromTheCoach;
