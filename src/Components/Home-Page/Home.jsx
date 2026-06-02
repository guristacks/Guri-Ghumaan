import React from "react";
import Header from "./Header-Section/header";
import Hero from "./Hero-Section/hero";
import Footer from "./Footer-Section/Footer";
import AboutPrev from "./AboutPrev-Section/AboutPrev";
import WorkPreview from "./Work-Section/WorkPrev";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutPrev />
        <WorkPreview />
      </main>
      <Footer />
    </>
  );
};

export default Home;
