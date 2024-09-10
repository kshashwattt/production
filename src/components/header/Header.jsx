import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  COMPANY_NAME,
  LOGO_ALT,
  NAV_LINKS,
  SCROLL_THRESHOLD,
  LOGO,
} from "../../data/data";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
        isScrolled ? "bg-primary-gray/90" : "bg-primary-gray/70"
      } backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img src={LOGO} alt={LOGO_ALT} className="w-12 h-12 mr-2" />
            <span className="font-bold text-xl text-primary-text">
              {COMPANY_NAME}
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-lg font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-text hover:text-white transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary-text transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-text hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="text-xl"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="block py-2 text-primary-text hover:text-white transition-colors duration-300 relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary-text transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
