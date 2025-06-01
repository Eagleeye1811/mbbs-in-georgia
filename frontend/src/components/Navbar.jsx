import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css"; // Create this CSS file for the animation

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Georgia", href: "/AboutGeorgia" },
  { name: "How To Apply", href: "/HowToApply" },
  { name: "Universities", href: "/Universities" },
  { name: "Student Testimonials", href: "/Testimonials" },
  { name: "FAQs", href: "/FAQ" },
  { name: "NMC Regulations", href: "/NMCReg" },
  { name: "Student LifeStyle", href: "/StudentLifeStyle" },
]; 

const languages = [
  { code: "EN", label: "English" },
  { code: "HI", label: "Hindi" },
  { code: "RU", label: "Russian" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [langDropdown, setLangDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    navigate(href);
    setMenuOpen(false);
  };

  const handleLangClick = () => setLangDropdown((prev) => !prev);

  const handleLangSelect = (code) => {
    setSelectedLang(code);
    setLangDropdown(false);
  };

  return (
    <nav className="bg-[#232a36] w-full shadow">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with hover effect */}
          <div className="georgia-logo text-white text-2xl font-bold mr-16 transition-colors duration-300 ease-in-out hover:text-[#FF6B4E]">
            GEORGIA
          </div>

          {/* Center nav items */}
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
          <div className="relative hidden lg:flex items-center">
            <button
              className="flex items-center gap-1 text-white text-sm px-4 py-2 hover:bg-gray-700 rounded"
              onClick={handleLangClick}
            >
              <span className="text-blue-300">🌐</span> {selectedLang}
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  langDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {langDropdown && (
              <ul className="absolute top-full right-0 mt-1 w-32 bg-white rounded-md shadow-lg z-10">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                        selectedLang === lang.code
                          ? "font-bold text-red-600"
                          : "text-gray-800"
                      }`}
                      onClick={() => handleLangSelect(lang.code)}
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-2"
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

        {/* Mobile Menu Items */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col gap-1 py-3">
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
              <button
                className="flex items-center text-white gap-2"
                onClick={handleLangClick}
              >
                <span className="text-blue-300">🌐</span> {selectedLang}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
