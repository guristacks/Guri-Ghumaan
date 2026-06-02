import React from "react";
import HeroContentTop from "./heroContentTop";
import HeroContentBottom from "./heroContentBottom";

const HeroContent = ({ nameRef }) => {
  return (
    <div className="name flex f-clmn" ref={nameRef}>
      <HeroContentTop />
      <HeroContentBottom />
    </div>
  );
};

export default HeroContent;
