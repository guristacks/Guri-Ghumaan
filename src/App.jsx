import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Routes, Route } from "react-router-dom";

import Script from "./script";
import Home from "./Components/Home-Page/Home";
import About from "./Components/About-Page/About";
import Contact from "./Components/Contact-Page/Contact";

const App = () => {
  return (
    <>
      <Analytics />
      <Script />
      <SpeedInsights />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
