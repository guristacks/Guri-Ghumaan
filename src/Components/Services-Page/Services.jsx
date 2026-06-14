import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Home-Page/Header-Section/header";
import Footer from "../Home-Page/Footer-Section/Footer";
import styles from "./Services.module.css";
import ServicesAnime from "./ServicesAnime";
import ServicesTop from "./ServicesTop";
import ServicesMiddle from "./ServicesMiddle";
import ServicesBottom from "./ServicesBottom";

const Services = () => {
  const blackRef = useRef(null);
  const helloRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "#Work" },
  ];
  return (
    <>
      <Helmet>
        <title>Services - Guri Ghumaan</title>
        <link rel="canonical" href="https://guri-ghumaan.vercel.app/services" />
      </Helmet>

      <Header navLinks={navLinks} isDark={true} />

      <main>
        <ServicesTop blackRef={blackRef} helloRef={helloRef} styles={styles} />
        <ServicesMiddle styles={styles} />
        <ServicesBottom styles={styles} />
      </main>

      <Footer />

      <ServicesAnime blackRef={blackRef} helloRef={helloRef} />
    </>
  );
};

export default Services;
