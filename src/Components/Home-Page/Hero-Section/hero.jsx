import React, { useRef } from "react";
import styles from "./hero.module.css";
import HeroContent from "./heroContent";
import HeroAnime from "./HeroAnime";

const Hero = () => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const fnameRef = useRef(null);
  const surnameRef = useRef(null);
  const blackRef = useRef(null);

  return (
    <section
      className={`${styles.hero} ${styles.flex} ${styles.ac} ${styles.jc}`}
      ref={heroRef}
      >
      <div ref={blackRef} className={styles.black}></div>
      <div className={styles.container}>
        <HeroContent
          styles={styles}
          nameRef={nameRef}
          fnameRef={fnameRef}
          surnameRef={surnameRef}
        />
        <HeroAnime
          heroRef={heroRef}
          nameRef={nameRef}
          fnameRef={fnameRef}
          surnameRef={surnameRef}
          blackRef={blackRef}
        />
      </div>
    </section>
  );
};

export default Hero;
