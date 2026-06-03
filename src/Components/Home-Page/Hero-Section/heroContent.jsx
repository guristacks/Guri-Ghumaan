import React from "react";
import HeroContentTop from "./heroContentTop";
import HeroContentBottom from "./heroContentBottom";

const HeroContent = ({ styles, nameRef }) => {
  return (
    <div className={`${styles.name} ${styles.flex} ${styles.fClmn}`} ref={nameRef}>
      <HeroContentTop styles={styles} />
      <HeroContentBottom styles={styles} />
    </div>
  );
};

export default HeroContent;
