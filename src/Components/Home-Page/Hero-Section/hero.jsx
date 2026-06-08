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
  const helloRef = useRef(null);
  const shortDescRef = useRef(null);

  return (
    <section
      className={`${styles.hero} ${styles.flex} ${styles.ac} ${styles.jc}`}
      ref={heroRef}
    >
      <div ref={blackRef} className={`${styles.black} ${styles.flex} ${styles.ac} ${styles.jc}`}>
        <h2 ref={helloRef} className={styles.helloText}></h2>
      </div>
      <div className={styles.container}>
        <HeroContent
          styles={styles}
          nameRef={nameRef}
          fnameRef={fnameRef}
          surnameRef={surnameRef}
          shortDescRef={shortDescRef}
        />
        <HeroAnime
          heroRef={heroRef}
          nameRef={nameRef}
          fnameRef={fnameRef}
          surnameRef={surnameRef}
          blackRef={blackRef}
          helloRef={helloRef}
          shortDescRef={shortDescRef}
        />
      </div>
    </section>
  );
};

export default Hero;
