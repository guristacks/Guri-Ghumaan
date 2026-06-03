import React from "react";
import FirstText from "./FirstText";
import ScndText from "./ScndText";
import AboutCTA from "./AboutCTA";

const AboutPrevContent = ({ styles }) => {
  return (
    <div className={`${styles.aboutContent} ${styles.flex} ${styles.sb}`}>
      <FirstText styles={styles} />
      <ScndText styles={styles} />
      <AboutCTA styles={styles} />
    </div>
  );
};

export default AboutPrevContent;
