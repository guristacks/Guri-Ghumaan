import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Script from "./script";
import Header from "./Components/Header-Section/header";
import Hero from "./Components/Hero-Section/hero";
import Footer from "./Components/Footer-Section/Footer";
// import AboutPrev from "./Components/AboutPrev-Section/AboutPrev";
import WorkPreview from "./Components/Work-Section/WorkPrev";

const App = () => {
  return (
    <>

      <Analytics />
      <Script />

      <Header />
      <main>
        <Hero />
        {/* <AboutPrev /> */}
        <WorkPreview />
      </main>
      <Footer />

    </>
  );
};

export default App;
