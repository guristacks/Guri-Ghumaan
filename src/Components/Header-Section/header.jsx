import React from "react";
import "./header.css";
import HeaderContent from "./headerContent";

const Header = () => {
  return (
    <header className="flex ac">
      <div className="container">
        <HeaderContent />
      </div>
    </header>
  );
};

export default Header;
