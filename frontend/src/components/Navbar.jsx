import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

/**
 * Navigation items configuration
 * Defines the main navigation structure for the application
 */
const navItems = [
  { name: "Home", href: "/" },
  { name: "About Georgia", href: "/about-georgia" },
  { name: "Universities", href: "/universities" },
  { name: "Student LifeStyle", href: "/students-life" },
  { name: "Student Testimonials", href: "/testimonials" },
  { name: "How To Apply", href: "/how-to-apply" },
  { name: "FAQs", href: "/faq" },
];

/**
 * Navbar component - Fixed top navigation with responsive design
 * Includes language selection and mobile responsive menu
 * @returns {JSX.Element} The rendered navbar
 */
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(64); // Default height (h-16 is 64px)

  /**
   * Handles navigation and closes mobile menu
   * @param {string} href - Target path to navigate to
   */
  const handleNavClick = (href) => {
    navigate(href);
    setMenuOpen(false);
  };

  /**
   * Initializes Google Translate widget
   */
  useEffect(() => {
    // Initialize Google Translate widget if available
    if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }
  }, [menuOpen]);

  /**
   * Handles language selection change
   * @param {Event} event - The change event from select element
   */
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    try {
      if (
        window.google &&
        window.google.translate &&
        window.google.translate.TranslateElement
      ) {
        const translateSelect = document.querySelector(".goog-te-combo");
        if (translateSelect) {
          translateSelect.value = selectedLanguage;
          translateSelect.dispatchEvent(new Event("change"));
        } else {
          console.error("Google Translate dropdown not found.");
        }
      } else {
        console.error("Google Translate library is not loaded.");
      }
    } catch (error) {
      console.error("Error changing language: ", error);
    }
  };

  return (
    <nav className="bg-[#232a36] w-full shadow fixed top-0 left-0 z-50">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="georgia-logo text-white text-2xl font-bold mr-16 hover:text-[#FF6B4E]">
            GEORGIA
          </div>

          {/* Desktop navigation items */}
          <div className="hidden lg:flex flex-grow justify-center">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium px-2 py-2 rounded-md transition ${
                    location.pathname === item.href
                      ? "bg-red-500 text-white"
                      : "text-white hover:bg-gray-700"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Language selector */}
          <div className="lang">
            <select id="languageSelect" onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="ta">Tamil</option>
              <option value="bn">Bengali</option>
              <option value="te">Telugu</option>
              <option value="ml">Malayalam</option>
              <option value="gu">Gujarati</option>
              <option value="kn">Kannada</option>
              <option value="mr">Marathi</option>
            </select>
          </div>

          {/* Mobile menu toggle button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu items */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-1 py-3 bg-[#232a36]">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`px-3 py-2 text-left text-sm font-medium transition ${
                location.pathname === item.href
                  ? "bg-red-500 text-white"
                  : "text-white hover:bg-gray-700"
              }`}
            >
              {item.name}
            </button>
          ))}
          <div className="px-3 py-2">
            <div id="google_translate_element"></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
