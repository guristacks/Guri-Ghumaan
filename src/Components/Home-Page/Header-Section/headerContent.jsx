import React from "react";
import MobileNav from "./mobileNav";
import Navbar from "./Navbar";
import NavCta from "./NavCta";

const HeaderContent = ({ navLinks }) => {
  return (
    <div className="row flex sb ac">
      <MobileNav />
      <Navbar navLinks={navLinks} />
      <NavCta />
    </div>
  );
};

export default HeaderContent;