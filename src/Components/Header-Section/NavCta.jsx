import React from "react";
import { MoveUpRight } from "lucide-react";

const NavCta = () => {
  return (
    <nav aria-label="Contact Navigation">
      <ul className="cta flex ac">
        <li>
          <a href="contact.html">
            Contact <MoveUpRight size={14} strokeWidth={2} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavCta;
