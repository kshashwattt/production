import React from "react";

const testimonials = [
  {
    name: "T. Hodda",
    title: "Director, Vision zest technology",
    quote:
      "Peakstreak Pvt. Ltd. transformed our website with their innovative solutions. Their team was professional, timely, and exceeded our expectations.",
  },
  {
    name: "Lal Mohan Rajak",
    title: "Market Lead, Vodafone Telecom",
    quote:
      "They handled everything with great efficiency and professionalism. Their support and guidance were invaluable throughout the process. I look forward to working with them again.",
  },
  {
    name: "Arun Jha",
    title: "Gym Owner",
    quote:
      "website development was a game-changer. Their attention to detail and expertise in creating a user-friendly, responsive site helped boost our online presence significantly. .",
  },
  {
    name: "Ram Agarwal",
    title: "Chief Financial Analyst",
    quote:
      "experience with Peakstreak’s CRM development was exceptional. They created a tailored solution that perfectly fit our small database needs, making it easier for us to manage customer relationships and track interactions.",
  },
  {
    name: "Suresh kamble",
    title: "Chairman, Saksham powerGen",
    quote:
      "Peakstreak Pvt. Ltd. delivered exceptional service for our solar panel plant project. Their expertise in renewable energy, timely execution, and attention to regulatory standards made the entire process seamless.",
  },
  {
    name: "Suman Banarjee",
    title: "CEO, Dhruv tara Trader",
    quote:
      "The food and grain supply services provided by Peakstreak were reliable and efficient. They ensured that all our needs were met with professionalism and speed. Their maintenance solutions have also been a great asset to our operations, helping us keep everything running smoothly.",
  },
  {
    name: "Ravisen Gupta",
    title: "Chief Operating Officer, Dbaby production ",
    quote:
      "Peakstreak’s expertise inmaintenance has been instrumental for us. Their ability to handle complex projects and provide ongoing support has made them our go-to partner for all our tech needs. Their commitment to excellence is truly commendable.",
  },
  {
    name: "Shashwat Kumar",
    title: "Founder & Director, Climsy Healthcare",
    quote:
      "The business loan services provided by Peakstreak were a crucial part of our expansion strategy. Their understanding of the unique needs of startups and their prompt, professional service helped us secure the funding we needed to take our business to the next level.",
  },
  {
    name: "Abhijeet Das",
    title: "Sr. Advocate, Supreme court",
    quote:
      "Working with Peakstreak Pvt. Ltd. has been a seamless experience. Their professionalism and commitment to delivering top-tier solutions for our legal firm were outstanding. The level of detail and efficiency they brought to the project exceeded our expectations, helping us streamline our operations with ease.",
  },
  
  // Add more testimonials as needed
];
const MobileTestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex-shrink-0 w-[300px] h-[250px] mr-4">
    <blockquote className="h-full flex flex-col">
      <div className="overflow-y-auto flex-grow mb-4">
        <p className="text-primary-gray italic">"{testimonial.quote}"</p>
      </div>
      <footer className="mt-auto">
        <div className="flex items-center">
          <div
            className="w-12 h-12 bg-primary-text rounded-full mr-4 flex-shrink-0"
            aria-hidden="true"
          ></div>
          <div>
            <cite className="font-bold text-primary-gray not-italic">
              {testimonial.name}
            </cite>
            <p className="text-sm text-primary-text">{testimonial.title}</p>
          </div>
        </div>
      </footer>
    </blockquote>
  </div>
);

const DesktopTestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 mb-8 break-inside-avoid-column">
    <blockquote className="flex flex-col">
      <p className="text-primary-gray italic mb-4">"{testimonial.quote}"</p>
      <footer className="mt-auto">
        <div className="flex items-center">
          <div
            className="w-12 h-12 bg-primary-text rounded-full mr-4 flex-shrink-0"
            aria-hidden="true"
          ></div>
          <div>
            <cite className="font-bold text-primary-gray not-italic">
              {testimonial.name}
            </cite>
            <p className="text-sm text-primary-text">{testimonial.title}</p>
          </div>
        </div>
      </footer>
    </blockquote>
  </div>
);

const TestimonialSection = () => {
  return (
    <section
      className="bg-gray-200 text-black py-16"
      aria-labelledby="testimonials-title"
    >
      <div className="container mx-auto px-4">
        <h2
          id="testimonials-title"
          className="text-4xl font-bold mb-2 text-center"
        >
          What they say <span className="text-primary-text">about us</span>
        </h2>
        <p className="text-center mb-12 text-gray-400">
          TESTIMONIALS FROM OUR GREATEST CLIENTS
        </p>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto">
            {testimonials.map((testimonial, index) => (
              <MobileTestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="columns-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <DesktopTestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
