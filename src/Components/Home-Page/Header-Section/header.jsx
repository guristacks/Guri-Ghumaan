import React from "react";
import "./header.css";
import HeaderContent from "./headerContent";

const Header = ({ navLinks }) => {
  return (
    <header className="flex ac">
      <div className="container">
        <HeaderContent navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Header;