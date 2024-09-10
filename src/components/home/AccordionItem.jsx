import React, { useState } from "react";
import { accordionData } from "../../data/data";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-primary-gray">
      <button
        className="flex justify-between items-center w-full p-4 text-left text-primary-text"
        onClick={onToggle}
      >
        <span className="md:font-semibold font-medium md:text-lg">{title}</span>
        <span className="transform transition-transform duration-200 ease-in-out">
          {isOpen ? (
            <svg
              className="w-5 h-5 rotate-180"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 italic text-white">
          <p>{content}</p>
        </div>
      )}
      <hr className="mx-4 border-t-primary-text" />
    </div>
  );
};

const Accordion = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [id]: !prevOpenItems[id],
    }));
  };

  return (
    <div className="w-full mx-auto md:px-10 py-10 bg-primary-gray">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          title={"📌 " + item.title}
          content={item.content}
          isOpen={openItems[item.id] || false}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
