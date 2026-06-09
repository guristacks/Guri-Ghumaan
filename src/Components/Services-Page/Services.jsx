import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Home-Page/Header-Section/header";
import Footer from "../Home-Page/Footer-Section/Footer";

const Services = () => {
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
      <Header navLinks={navLinks} />
      <main>
        <section >
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
