import React from "react";

const Navbar = () => {
  return (
    <nav aria-label="Primary Navigation">
      <ul className="nav-links flex ac">
        <li>
          <a href="#AboutPrev">About</a>
        </li>
        <li>
          <a href="#Work">Work</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
