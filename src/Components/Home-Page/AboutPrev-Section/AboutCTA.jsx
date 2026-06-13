import { Link } from "react-router-dom";
import React, { useRef } from "react";
import AboutPrevAnime from "./AboutPrevAnime";

const AboutCTA = ({ styles }) => {

  const AboutBtn = useRef(null);

  return (
    <>
      <Link
        ref={AboutBtn}
        to="/about"
        className={`${styles.aboutCta} ${styles.flex} ${styles.ac} ${styles.jc}`}
      >
        About Me
      </Link>
      <AboutPrevAnime AboutBtn={AboutBtn} />
    </>
  );
};

export default AboutCTA;
