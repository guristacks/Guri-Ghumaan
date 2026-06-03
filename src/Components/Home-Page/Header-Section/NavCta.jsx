import React from "react";
import { Link } from "react-router-dom";

const NavCta = ({ styles }) => {
  return (
    <nav aria-label="Contact Navigation">
      <ul className={`${styles.cta} ${styles.flex} ${styles.ac}`}>
        <li>
          <Link to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavCta;
