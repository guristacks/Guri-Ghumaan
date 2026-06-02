import React from "react";
import Header from "../Home-Page/Header-Section/header";
import Footer from "../Home-Page/Footer-Section/Footer";

const About = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "#Work" },
    { name: "Services", path: "#services" },
    { name: "Testimonials", path: "#testimonials" },
  ];

  return (
    <>
      <Header navLinks={navLinks} />
      <Footer />
    </>
  );
};

export default About;