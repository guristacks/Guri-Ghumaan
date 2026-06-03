import React from "react";

const HeroContentBottom = ({ styles }) => {
  return (
    <div className={`${styles.lName} ${styles.flex} ${styles.fClmn}`}>
      <div className={styles.smallIntro}>
        <p>Frontend</p>
        <p>Web Developer</p>
      </div>
      <h1>GHUMAAN</h1>
    </div>
  );
};

export default HeroContentBottom;
