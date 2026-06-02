import React from "react";
import { Link } from "react-router-dom";

const NavCta = () => {
  return (
    <nav aria-label="Contact Navigation">
      <ul className="cta flex ac">
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
