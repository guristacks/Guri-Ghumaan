import React from "react";
import HeroContentTop from "./heroContentTop";
import HeroContentBottom from "./heroContentBottom";

const HeroContent = () => {
  return (
    <div className="name flex f-clmn">
      <HeroContentTop />
      <HeroContentBottom />
    </div>
  );
};

export default HeroContent;
