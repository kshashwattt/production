import React from "react";
import AboutTestimonial from "../components/about/AboutTestimonial";
import Card from "../components/about/Card";
import AboutCompanySection from "../components/about/AboutCompanySection";

const About = () => {
  return (
    <div>
      <Card />
      <header
        className="bg-[url('../src/assets/contactbg.jpg')] bg-cover bg-center text-white"
        role="banner"
      >
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold sm:text-6xl mb-4">About Us</h1>
          <p className="text-xl uppercase">
            Feel free to send us a message now!
          </p>
        </div>
      </header>
      <AboutCompanySection />
      <AboutTestimonial />
    </div>
  );
};

export default About;
