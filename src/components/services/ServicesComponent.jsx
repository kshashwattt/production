import React, { useState } from "react";
import imagea from "../../assets/serviceimgb.png";
import imageb from "../../assets/serviceimga.png";

const services = [
  {
    title: "Food & Grains Logistics",
    image: "../../assets/serviceimgb.png",
    description:
      "Our Food & Grains Logistics service specializes in the efficient transportation, storage, and distribution of agricultural products, particularly focusing on food grains. We understand the critical importance of maintaining the quality and safety of these essential commodities throughout the supply chain.",
  },
  {
    title: "Product Marketing",
    image: "../../assets/serviceimga.png",
    description:
      "We offer comprehensive product marketing services designed to help businesses effectively promote their products, increase market share, and drive revenue growth. Our team of experienced marketing professionals combines strategic thinking with creative execution to deliver impactful marketing solutions tailored to each client's unique needs.Our team works closely with your internal stakeholders, including product managers, sales teams, and executives, to ensure alignment between product development, marketing efforts, and overall business goals. We pride ourselves on our data-driven approach, creative problem-solving, and ability to adapt quickly to changing market conditions. Whether you're launching a new product, seeking to revitalize an existing one, or looking to expand into new markets, our product marketing services are designed to help you achieve your business objectives and create lasting connections with your target audience.",
  },
  {
    title: "Software Solutions & Maintenance",
    image: "../../assets/serviceimgb.png",
    description:
      "We provide comprehensive software solutions and maintenance services designed to help businesses leverage technology effectively, improve operational efficiency, and stay competitive in the digital landscape. Our team of skilled developers, engineers, and IT professionals offers end-to-end software services, from custom development to ongoing maintenance and support. Our team is committed to delivering high-quality, scalable, and secure software solutions that drive business growth and innovation. We work closely with our clients to understand their unique challenges and objectives, ensuring that our solutions are perfectly aligned with their business goals. Whether you need a custom software application, ongoing maintenance for your existing systems, or strategic IT consulting, our Software Solutions & Maintenance services are designed to keep your business at the forefront of technological advancement.",
  },
  {
    title: "Business Loan",
    image: "../../assets/serviceimgb.png",
    description:
      "In business loans, Peakstreak Pvt. Ltd. provides financial solutions tailored to support business owners and startups. The company offers flexible loan options designed to meet the specific needs of growing businesses, helping them secure funding for expansion, operations, or new ventures. By providing accessible and competitive financing, Peakstreak empowers businesses to achieve their goals and thrive in competitive markets.",
  },
];

const ServiceCard = ({ title, isActive, onClick, index }) => (
  <button
    className={`flex justify-between items-center w-full p-4 mb-2 rounded-lg ${
      isActive
        ? "bg-primary-text text-primary-gray"
        : "bg-primary-gray text-primary-text"
    } hover:bg-primary-text hover:text-primary-gray transition-colors focus:outline-none focus:ring-2 focus:ring-primary-text focus:ring-opacity-50`}
    onClick={onClick}
    aria-pressed={isActive}
    aria-controls={`service-details-${index}`}
  >
    <span className="font-semibold text-lg">{title}</span>
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);

const ServiceDisplay = ({ title, image, description, index }) => {
  return (
    <div id={`service-details-${index}`} className="mt-4 " aria-live="polite">
      <h2 className="text-2xl font-bold mb-4 text-primary-text">{title}</h2>
      <img
        src={image}
        alt=""
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <div className="text-white">
        <p
          className="inline-block max-h-52 overflow-y-auto pb-12"
          style={{
            maskImage:
              "linear-gradient(to bottom, white 35%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, white 85%, transparent 100%)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const ServicesComponent = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="bg-primary-gray p-4 md:p-6">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 md:pr-4 mb-4 md:mb-0">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              isActive={activeService === index}
              onClick={() => setActiveService(index)}
            />
          ))}
        </div>

        <div className="w-full  md:w-2/3">
          <ServiceDisplay {...services[activeService]} index={activeService} />
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
