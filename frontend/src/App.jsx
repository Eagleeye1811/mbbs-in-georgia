import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutGeorgia from "./pages/AboutGeorgia";
import Faq from "./pages/Faq";
import HowToApply from "./pages/HowToApply";
import NMCReg from "./pages/NMCReg";
import Testimonials from "./pages/Testimonials";
import University from "./pages/University";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutGeorgia" element={<AboutGeorgia />} />
            <Route path="/FAQ" element={<Faq />} />
            <Route path="/HowToApply" element={<HowToApply />} />
            <Route path="/NMCReg" element={<NMCReg />} />
            <Route path="/Universities" element={<University />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/termsAndConditions" element={<TermsConditions />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
