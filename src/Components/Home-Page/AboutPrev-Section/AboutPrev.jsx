import React from "react";
import styles from "./AboutPrev.module.css";
import AboutPrevContent from "./AboutPrevContent";

const AboutPrev = () => {
  return (
    <section id="AboutPrev" className={styles.aboutPrev}>
      <div className={styles.container}>
        <AboutPrevContent styles={styles} />
      </div>
    </section>
  );
};

export default AboutPrev;
