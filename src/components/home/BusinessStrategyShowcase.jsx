import React, { useState } from "react";

const BusinessStrategyShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const benefits = [
    {
      title: "Food and Grains",
      description:
        "n the food and grains sector, Peakstreak Pvt. Ltd. specializes in the purchase and supply of essential commodities. The company sources high-quality grains and food products.",
    },
    {
      title: "Website Development",
      description:
        "we creates tailored, user-friendly websites that drive engagement and business growth. The company offers end-to-end services, including website design, development, SEO optimization, and CRM solutions. ",
    },
    {
      title: "Business Growth",
      description:
        "Keep encashing the same parked money for further business growth.",
    },
    {
      title: "Application Development",
      description:
        "We delivers high-performance, customized mobile and web applications designed to enhance user engagement and streamline business operations. The company offers full-cycle app development services.",
    },
    {
      title: "Product Marketing",
      description:
        "Helps businesses strategically position and promote their products to reach the right audience. The company offers services including market research, branding, digital marketing campaigns.",
    },
    {
      title: "Tender-Based Work",
      description:
        "specializes in managing and executing government and private sector tenders across various industries. The company handles the entire process, from tender documentation and bidding to project.",
    },
    {
      title: "We provide business Loans",
      description:
        "provides financial solutions tailored to support business owners and startups. The company offers flexible loan options designed to meet the specific needs of growing businesses.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-primary-gray to-gray-900 text-primary-text min-h-screen p-4 md:p-8 relative overflow-hidden">
      {/* Abstract SVG Shapes */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5%" cy="5%" r="50" fill="#a4c63920" />
        <circle cx="95%" cy="95%" r="100" fill="#4ade8020" />
        <path
          d="M0,100 Q50,50 100,100 T200,100"
          stroke="#f59e0b20"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Floating $ Signs */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-yellow-500 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          $
        </div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center animate-fade-in">
          
          <span className="block text-5xl md:text-7xl mt-2 text-green-400">
           Our Services
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 text-center animate-slide-up text-yellow-300">
          What Solutions We Provide
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white bg-opacity-10 p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 backdrop-filter backdrop-blur-sm flex flex-col"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <h3 className="text-2xl font-semibold mb-3 text-primary-text">
                {benefit.title}
              </h3>
              <p
                className={`text-lg font-medium text-white transition-all duration-300 ${
                  activeIndex === index
                    ? "opacity-100 max-h-40"
                    : "opacity-50 max-h-0"
                } overflow-hidden`}
              >
                {"✅ " + benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="text-center">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-4 px-8 rounded-full text-xl md:text-2xl hover:from-green-500 hover:to-blue-600 transition duration-300 transform hover:scale-110 animate-pulse">
            Optimize Your Finances Now
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default BusinessStrategyShowcase;
