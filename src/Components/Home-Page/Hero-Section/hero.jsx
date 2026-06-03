import React, { useRef } from "react";
import styles from "./hero.module.css";
import HeroContent from "./heroContent";
import HeroAnime from "./HeroAnime";

const Hero = () => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);

  return (
    <section className={`${styles.hero} ${styles.flex} ${styles.ac} ${styles.jc}`} ref={heroRef}>
      <div className={styles.container}>
        <HeroContent styles={styles} nameRef={nameRef} />
        <HeroAnime heroRef={heroRef} nameRef={nameRef} />
      </div>
    </section>
  );
};

export default Hero;
