import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  COMPANY_NAME,
  COMPANY_DESCRIPTION,
  COMPANY_LINKS,
  LEGAL_LINKS,
  SOCIAL_LINKS,
  CONTACT_INFO,
  COPYRIGHT_YEAR,
} from "../../data/about";

const AboutFooter = () => {
  return (
    <footer
      className="bg-primary-gray text-white p-6 md:p-12 font-sans svg-background mb-0"
      role="contentinfo"
    >
      <div className="container mx-auto grid md:grid-cols-8 gap-8">
        {/* Company Info */}
        <div className="text-center md:text-left col-span-2">
          <h2 className="text-2xl font-semibold mb-8 flex items-center justify-center md:justify-start">
            <img
              src={logo}
              alt={`${COMPANY_NAME} logo`}
              className="h-8 w-8 mr-2"
            />
            {COMPANY_NAME}
          </h2>
          <p className="text-balance">{COMPANY_DESCRIPTION}</p>
        </div>

        {/* Company Links */}
        <nav
          className="text-center md:text-left col-span-2 "
          aria-label="Company links"
        >
          <h2 className="text-2xl font-semibold mb-8">Company</h2>
          <ul className="links">
            {COMPANY_LINKS.map((link, index) => (
              <li key={index}>
                <Link to={link.to} className="block mb-2">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal Links */}
        <nav
          className="text-center md:text-left col-span-2 md:col-span-1 lg:col-span-2"
          aria-label="Legal links"
        >
          <h2 className="text-2xl font-semibold mb-8">Legal</h2>
          <ul className="links">
            {LEGAL_LINKS.map((link, index) => (
              <li key={index}>
                <Link to={link.to} className="block mb-2">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div className="text-center md:text-left bg-primary-gray bg-opacity-75 p-4 pt-0 rounded-lg col-span-2 min-w-fit">
          <h2 className="text-2xl font-semibold mb-8">Socials</h2>
          <ul
            className="flex justify-center md:justify-start mb-4"
            aria-label="Social media links"
          >
            {SOCIAL_LINKS.map((social, index) => (
              <li key={index} className="mx-2">
                <a
                  href={social.href}
                  aria-label={`${social.name} (opens in a new tab)`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              </li>
            ))}
          </ul>
          <address className="flex flex-col gap-2 px-[10%] sm:px-0">
            {CONTACT_INFO.map((info, index) => (
              <p
                key={index}
                className="flex gap-2 text-left text-balance text-clip"
              >
                <FontAwesomeIcon icon={info.icon} aria-hidden="true" />{" "}
                {info.text}
              </p>
            ))}
          </address>
        </div>
      </div>

      <div className="text-center mt-[10rem] text-white">
        <hr className="border-primary-text my-4" aria-hidden="true" />
        <p>
          &copy; {COPYRIGHT_YEAR} {COMPANY_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default AboutFooter;
