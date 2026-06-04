import React from "react";
import Header from "../Home-Page/Header-Section/header";
import styles from "./ContactPage.module.css";
import ContactForm from "./ContactForm";

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
      <main>
        <ContactForm styles={styles} />
      </main>
    </>
  );
};

export default Contact;