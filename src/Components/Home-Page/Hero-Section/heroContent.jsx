import React from "react";
import HeroContentTop from "./heroContentTop";
import HeroContentBottom from "./heroContentBottom";

const HeroContent = ({ styles, nameRef, fnameRef, surnameRef, shortDescRef }) => {
  return (
    <div
      className={`${styles.name} ${styles.flex} ${styles.fClmn}`}
      ref={nameRef}
    >
      <HeroContentTop styles={styles} fnameRef={fnameRef} />
      <HeroContentBottom
        styles={styles}
        fnameRef={fnameRef}
        surnameRef={surnameRef}
        shortDescRef={shortDescRef}
      />
    </div>
  );
};

export default HeroContent;
