import React from "react";
import Header from "../Home-Page/Header-Section/header";
import Footer from "../Home-Page/Footer-Section/Footer";

const Contact = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
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

export default Contact;