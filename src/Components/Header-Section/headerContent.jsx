import React from "react";
import MobileNav from "./mobileNav";
import Navbar from "./Navbar";
import NavCta from "./NavCta";

const HeaderContent = () => {
  return (
    <div className="row flex sb ac">
      <MobileNav />

      <Navbar />

      <NavCta />
    </div>
  );
};

export default HeaderContent;
