import React, { useState, useRef } from "react";
import svg from "../../assets/About-Us.svg";

const AboutCompanySection = () => {
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
      <div className="w-full p-4 md:p-8 ">
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
            WHO WE ARE
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Get to know about{" "}
            <span className="text-primary-text">our company</span>
          </h1>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            PeakStreak: Cultivating Success from Field to Fork At PeakStreak,
            we're not just part of the food and grain industry - we're
            revolutionizing it. Our roots run deep in supply chain excellence,
            ensuring your products move seamlessly from farm to table. But we're
            also sowing the seeds of innovation, branching out into cutting-edge
            IT solutions that will help your business grow and thrive.
          </p>

          {showMore && (
            <>
              <p className="text-sm md:text-base text-gray-700 mb-4">
                Whether you're looking to streamline your supply chain or
                elevate your tech game, PeakStreak is your partner in reaching
                new heights. Join us as we harvest the potential of today's food
                industry and cultivate the solutions of tomorrow. PeakStreak:
                Where Tradition Meets Technology, and Every Business Finds Its
                Peak.
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-4">
                Our reach extends to the heart of one of the world's largest
                markets - India. With our expert product marketing services, we
                help businesses tap into the vast potential of the Indian
                market. We understand the unique flavors of local demand and
                blend them with international best practices, ensuring your
                products not only enter but flourish in this dynamic
                marketplace.
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-4">
                Whether you're looking to streamline your supply chain, elevate
                your tech game, or make a lasting impression in the Indian
                market, PeakStreak is your partner in reaching new heights. We
                offer: Robust supply chain solutions for the food and grain
                industry Innovative IT solutions tailored for agribusiness
                Strategic product marketing services in India Global expertise
                with local market insights Join us as we harvest the potential
                of today's global food industry and cultivate the solutions of
                tomorrow. With PeakStreak, your business isn't just keeping up -
                it's staying ahead of the curve. PeakStreak: Where Tradition
                Meets Technology, Local Meets Global, and Every Business Finds
                Its Peak.
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

export default AboutCompanySection;
