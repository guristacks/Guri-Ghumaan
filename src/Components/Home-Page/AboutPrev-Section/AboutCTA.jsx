import { Link } from "react-router-dom";
import React from "react";

const AboutCTA = ({ styles }) => {
  return (
    <Link to="/about" className={`${styles.aboutCta} ${styles.flex} ${styles.ac} ${styles.jc}`}>
      About Me
    </Link>
  );
};

export default AboutCTA;
