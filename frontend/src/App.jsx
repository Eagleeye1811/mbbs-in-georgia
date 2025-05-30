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

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutGeorgia" element={<AboutGeorgia />} />
        <Route path="/FAQ" element={<Faq />} />
        <Route path="/HowToApply" element={<HowToApply />} />
        <Route path="/NMCReg" element={<NMCReg />} />
        <Route path="/Universities" element={<University />} />
        <Route path="/Testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
