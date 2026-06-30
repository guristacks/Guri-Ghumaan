import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Home-Page/Header-Section/header";
import Footer from "../Home-Page/Footer-Section/Footer";
import WorkTop from "./WorkContent";
import styles from "./WorkPage.module.css";
import WorkPageAnime from "./WorkPageAnime";

const Work = () => {
  const blackRef = useRef(null);
  const helloRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  return (
    <>
      <Helmet>
        <title>Work - Guri Ghumaan</title>
        <link rel="canonical" href="https://guri-ghumaan.vercel.app/work" />
      </Helmet>

      <Header navLinks={navLinks} />

      <main>
        <WorkTop blackRef={blackRef} helloRef={helloRef} styles={styles} />
      </main>
      <Footer />
    </>
  );
};

export default Work;
