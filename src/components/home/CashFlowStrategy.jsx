import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Repeat, Droplet } from "lucide-react";

const CashFlowStrategy = () => {
  const steps = [
    {
      title: "Convert Expenses into Cash Flow",
      description:
        "Transform business expenses into a powerful cash flow engine with tax benefits.",
      icon: <DollarSign className="w-12 h-12 text-emerald-400" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Reinstate Cash Flow to Equity",
      description:
        "Amplify growth by strategically reinvesting in your equity portfolio.",
      icon: <Repeat className="w-12 h-12 text-blue-400" />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Maintain Unparalleled Liquidity",
      description:
        "Enjoy zero-load transactions and optimize cash flow for expansion.",
      icon: <Droplet className="w-12 h-12 text-purple-400" />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-gray to-gray-900 text-primary-text font-sans p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-text to-green-300"
        >
          Revolutionary Cash-flow Strategy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl mb-12 text-center text-gray-300"
        >
          Unlock up to{" "}
          <span className="text-primary-text font-bold">
            40% annual cash flow
          </span>{" "}
          from your business expenses
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
              className={`bg-gradient-to-br ${step.color} p-1 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className="bg-primary-gray h-full p-6 rounded-xl">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  {step.title}
                </h2>
                <p className="text-sm text-gray-300">{ step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-center"
        >
          <button className="bg-gradient-to-r from-primary-text to-green-400 text-primary-gray px-8 py-4 rounded-full font-bold text-lg flex items-center mx-auto hover:shadow-lg hover:scale-105 transition-all duration-300">
            Boost Your Cash Flow Now
            <ArrowRight className="ml-2" />
          </button>
        </motion.div> */}
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-32 -mb-1 text-primary-text opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default CashFlowStrategy;
