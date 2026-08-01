import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Home-Page/Header-Section/header";
import Footer from "../Home-Page/Footer-Section/Footer";
import styles from "./AboutPage.module.css";
import AboutTop from "./AboutFirst-Section/AboutTop";
import AboutAnime from "./AboutAnime";
import Testimonials from "./AboutSixth-Section/Testimonials";
import FAQ from "./AboutFifth-Section/FAQ";
import AboutImgSec from "./AboutScnd-Section/AboutImgSec";
import AboutServices from "./AboutFrth-Section/AboutServices";

const About = () => {
  const blackRef = useRef(null);
  const helloRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Services", path: "#services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <Helmet>
        <title>About - Guri Ghumaan</title>
        <link rel="canonical" href="https://guristacks.vercel.app/about" />
      </Helmet>

      <Header navLinks={navLinks} isDark={true} />

      <main>
        <AboutTop blackRef={blackRef} helloRef={helloRef} />
        <AboutImgSec />
        <AboutServices />
        <FAQ />
        <Testimonials styles={styles} />
      </main>

      <Footer />

      <AboutAnime blackRef={blackRef} helloRef={helloRef} />
    </>
  );
};

export default About;
