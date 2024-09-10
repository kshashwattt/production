import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Calendar } from "lucide-react";

const ModernUISection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <SVGBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary-gray"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          What Sets Us <span className="text-primary-text">Apart</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ staggerChildren: 0.2 }}
        >
          <Feature
            icon={<Users className="w-12 h-12" />}
            title="Top Industry Leaders"
            description="Team of top 3 industry leaders, consistent Alpha generators for decades."
          />
          <Feature
            icon={<TrendingUp className="w-12 h-12" />}
            title="Secure Financial Legacy"
            description="Tirelessly building and securing your financial future under one roof."
          />
          <Feature
            icon={<Calendar className="w-12 h-12" />}
            title="Revolutionize Your Business"
            description="Explore our proven strategy to transform your business's financial health."
          />
        </motion.div>

        <motion.p
          className="mt-16 text-xl text-center text-primary-gray font-semibold"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Trusted by{" "}
          <span className="text-primary-text">50 + entrepreneurs</span> in
          India for growing business and relations.
        </motion.p>

        {/* <motion.div
          className="mt-12 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <button className="bg-primary-text text-white font-bold py-4 px-8 rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105 shadow-lg">
            Schedule Your One-on-One Meeting
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

const Feature = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div className="text-primary-text mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4 text-primary-gray">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const SVGBackground = () => (
  <div className="absolute inset-0 z-0 opacity-10">
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

export default ModernUISection;
