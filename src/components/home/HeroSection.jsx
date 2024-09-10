import React from "react";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Droplet } from "lucide-react";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-primary-gray text-primary-text py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <SVGBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Peakstreak <span className="text-white"></span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-center mb-16 max-w-3xl mx-auto text-gray-400 font-light"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Where innovation meets expertise in food & grains, IT, Tender based
          work, finances, product marketing and maintenance solutions.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ staggerChildren: 0.2 }}
        >
          <Feature
            icon={<Shield className="w-12 h-12" />}
            title="Business Loans"
            description="The company offers flexible loan options designed to meet the specific needs of growing businesses."
          />
          <Feature
            icon={<TrendingUp className="w-12 h-12" />}
            title="Tender-Based work"
            description="By leveraging its expertise in compliance, contract management, and resource allocation, Peakstreak ensures that all projects are completed efficiently."
          />
          <Feature
            icon={<Droplet className="w-12 h-12" />}
            title="IT Development"
            description="With a focus on modern web technologies, Peakstreak delivers scalable and responsive websites that cater to the specific needs of businesses."
          />
        </motion.div>

        <motion.div
          className="bg-gray-800 rounded-xl p-10 mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-white">
            Our Innovative Approach
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="mr-4 flex-shrink-0 mt-1 text-primary-text">•</div>
              <p className="text-gray-300">
                At Peakstreak Pvt. Ltd., we employ a systematic approach to
                business diversification, ensuring comprehensive project
                execution across multiple sectors. Our commitment to 100%
                capital protection and effective risk management is guided by
                industry best practices and strict regulatory compliance,
                enabling us to deliver secure and reliable services to our
                clients.
              </p>
            </li>
            <li className="flex items-start">
              <div className="mr-4 flex-shrink-0 mt-1 text-primary-text">•</div>
              <p className="text-gray-300">
                Protect your business from the most daunting challenges and
                risks, such as over-diversification, excessive resource
                allocation, outdated solutions, hidden operational pitfalls,
                liquidity issues, and the fear of loss. At Peakstreak Pvt. Ltd.,
                we prioritize strategic planning and risk management, ensuring
                your business stays secure and resilient in a rapidly changing
                market.
              </p>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Unveil the Exclusive{" "}
            <span className="text-primary-text">
              "Shield Your Business from Over-Diversification and Unforeseen
              Risks"
            </span>
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-400">
            Protect your business by avoiding excessive spread of resources and
            managing unexpected challenges.
            <br />
            Without risking a penny from your savings!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, description }) => (
  <motion.div
    className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div className="text-primary-text mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const SVGBackground = () => (
  <div className="absolute inset-0 z-0 opacity-5">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="smallGrid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
        <pattern
          id="grid"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <rect width="100" height="100" fill="url(#smallGrid)" />
          <path
            d="M 100 0 L 0 0 0 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

export default HeroSection;
