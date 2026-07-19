import React from "react";
import { Link } from "react-router-dom";

const NavCta = ({ styles, isDark }) => {
  return (
    <p className={styles.nameTag}>
      <a href="#HERO" style={{ color: isDark ? "#000" : "#fff" }}>
        © guristacks
      </a>
    </p>
  );
};

export default NavCta;
