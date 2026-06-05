import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Home-Page/Header-Section/header";
import Footer from "../Home-Page/Footer-Section/Footer";
// import styles from "./About.module.css";

const About = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "#Work" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "#testimonials" },
  ];

  return (
    <>
      <Helmet>
        <title>About - Guri Ghumaan</title>
        <link
          rel="canonical"
          href="https://guri-ghumaan.vercel.app/about"
        />
      </Helmet>
      <Header navLinks={navLinks} />
      <main></main>
      <Footer />
    </>
  );
};

export default About;