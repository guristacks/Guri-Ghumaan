import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Home-Page/Header-Section/header";
import Footer from "../Home-Page/Footer-Section/Footer";
import styles from "./WorkPage.module.css";
import WorkPageAnime from "./WorkPageAnime";
import WorkTitle from "./WorkTitle/WorkTitle";
import ShowCase from "./ShowCase/ShowCase";

const Work = () => {
  const blackRef = useRef(null);
  const helloRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <Helmet>
        <title>Work - Guri Ghumaan</title>
        <link rel="canonical" href="https://guri-ghumaan.vercel.app/work" />
      </Helmet>

      <Header navLinks={navLinks} isDark={true} />

      <main>
        <WorkTitle blackRef={blackRef} helloRef={helloRef} styles={styles} />
        <ShowCase styles={styles} />
      </main>
      <Footer />
      <WorkPageAnime blackRef={blackRef} helloRef={helloRef} />
    </>
  );
};

export default Work;
