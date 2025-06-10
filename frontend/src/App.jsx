import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import AboutGeorgia from "../src/pages/AboutGeorgia";
import Faq from "../src/pages/Faq";
import HowToApply from "../src/pages/HowToApply";
import Testimonials from "../src/pages/Testimonials";
import University from "../src/pages/University";
import Footer from "../src/components/Footer";
import ContactUs from "../src/pages/ContactUs";
import PrivacyPolicy from "../src/pages/PrivacyPolicy";
import TermsConditions from "../src/pages/TermsConditions";
import StudentLife from "../src/pages/StudentLife";
import UniversityDetailPage from "../src/pages/UniversityDetailPage";

const App = () => {
  // Add this effect to handle translation events
  useEffect(() => {
    // Function to fix spacing after Google Translate renders
    const fixTranslateSpacing = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        const height = navbar.offsetHeight;
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`
        );
      }
    };

    // Add mutation observer to detect Google Translate changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        if (
          document.body.classList.contains("translated-rtl") ||
          document.body.classList.contains("translated-ltr")
        ) {
          fixTranslateSpacing();
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    // Also check periodically for Google Translate changes that might be missed
    const interval = setInterval(fixTranslateSpacing, 2000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-georgia" element={<AboutGeorgia />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/how-to-apply" element={<HowToApply />} />
            <Route path="/universities" element={<University />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/students-life" element={<StudentLife />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route
              path="/university-detail"
              element={<UniversityDetailPage />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
