import React from "react";
import ServicesComponent from "../components/services/ServicesComponent";
import FromTheCoach from "../components/services/FromTheCoach";

const Services = () => {
  return (
    <div className="flex flex-col gap-5 bg-primary-gray">
      <header
        className="bg-[url('../src/assets/contactbg.jpg')] bg-cover bg-center text-white"
        role="banner"
      >
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold sm:text-6xl mb-4">
            Our Services
          </h1>
          <p className="text-xl uppercase">What we offer to our clients</p>
        </div>
      </header>
      <FromTheCoach />
      <ServicesComponent />
    </div>
  );
};

export default Services;
