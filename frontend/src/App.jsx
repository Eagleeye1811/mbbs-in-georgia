import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutGeorgia from "./pages/AboutGeorgia";
import Faq from "./pages/Faq";
import HowToApply from "./pages/HowToApply";
import Testimonials from "./pages/Testimonials";
import University from "./pages/University";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import StudentLife from "./pages/StudentLife";
import UniversityDetailPage from "./pages/UniversityDetailPage";

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
