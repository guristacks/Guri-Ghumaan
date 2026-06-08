import React from "react";

const HeroContentBottom = ({ styles, surnameRef, shortDescRef }) => {
  return (
    <div className={`${styles.lName} ${styles.flex} ${styles.fClmn}`}>
      <div className={styles.smallIntro}>
        <p ref={shortDescRef} >Frontend <br /> Web Developer </p>
      </div>
      <h1 ref={surnameRef}>GHUMAAN</h1>
    </div>
  );
};

export default HeroContentBottom;
