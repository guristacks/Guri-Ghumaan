import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Home-Page/Header-Section/header";
import styles from "./ContactPage.module.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Guri Ghumaan</title>
        <link
          rel="canonical"
          href="https://guri-ghumaan.vercel.app/contact"
        />
      </Helmet>

      <Header navLinks={navLinks} />

      <main>
        <ContactForm styles={styles} />
      </main>
    </>
  );
};

export default Contact;