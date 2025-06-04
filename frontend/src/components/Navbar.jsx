import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Georgia", href: "/AboutGeorgia" },
  { name: "How To Apply", href: "/HowToApply" },
  { name: "Universities", href: "/universities" },
  { name: "Student Testimonials", href: "/testimonials" },
  { name: "FAQs", href: "/FAQ" },
  { name: "Student LifeStyle", href: "/StudentLifeStyle" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    navigate(href);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-[#232a36] w-full shadow ">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="georgia-logo text-white text-2xl font-bold mr-16 hover:text-[#FF6B4E]">
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

          {/* Google Translate Button */}
          <div className="hidden lg:flex items-center">
            <div id="google_translate_element"></div>
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
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-1 py-3 ">
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
