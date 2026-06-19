import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Home-Page/Header-Section/header";
import Footer from "../Home-Page/Footer-Section/Footer";
import styles from "./AboutPage.module.css";
import AboutTop from "./AboutTop";
import AboutAnime from "./AboutAnime";
import AboutScnd from "./AboutScnd";

const About = () => {
  const blackRef = useRef(null);
  const helloRef = useRef(null);
  const logosRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "#Work" },
    { name: "Services", path: "/services" },
  ];

  return (
    <>
      <Helmet>
        <title>About - Guri Ghumaan</title>
        <link rel="canonical" href="https://guri-ghumaan.vercel.app/about" />
      </Helmet>
      <Header navLinks={navLinks} isDark={true} />
      <main>
        <AboutTop blackRef={blackRef} helloRef={helloRef} styles={styles} />
        <AboutScnd styles={styles} logosRef={logosRef} />
      </main>
      <Footer />
      <AboutAnime blackRef={blackRef} helloRef={helloRef} logosRef={logosRef} />
    </>
  );
};

export default About;
