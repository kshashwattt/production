import React from "react";
import Accordion from "../components/home/AccordionItem";
import BusinessStrategyShowcase from "../components/home/BusinessStrategyShowcase";
import CashFlowStrategy from "../components/home/CashFlowStrategy";
import ModernUISection from "../components/home/ModernUISection";
import HeroSection from "../components/home/HeroSection";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <BusinessStrategyShowcase />
      {/* <CashFlowStrategy /> */}
      <ModernUISection />
      <Accordion />
    </div>
  );
};

export default Home;
