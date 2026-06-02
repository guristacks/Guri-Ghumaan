import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ navLinks }) => {
  const defaultLinks = [
    { name: "About", path: "/about" },
    { name: "Work", path: "#Work" },
    { name: "Services", path: "#services" },
    { name: "Testimonials", path: "#testimonials" },
  ];

  const links = navLinks || defaultLinks;

  return (
    <nav aria-label="Primary Navigation">
      <ul className="nav-links flex ac">
        {links.map((link, index) => (
          <li key={index}>
            {link.path.startsWith("/") ? (
              <Link to={link.path}>{link.name}</Link>
            ) : (
              <a href={link.path}>{link.name}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;