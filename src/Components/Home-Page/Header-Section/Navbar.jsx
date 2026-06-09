import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ navLinkRef, listRef, styles, navLinks }) => {
  const defaultLinks = [
    { name: "About", path: "/about" },
    { name: "Work", path: "#Work" },
    { name: "Services", path: "/services" },
  ];

  const links = navLinks || defaultLinks;

  return (
    <nav aria-label="Primary Navigation">
      <ul ref={navLinkRef} className={`${styles.navLink} ${styles.flex} ${styles.ac} navLink`}>
        {links.map((link, index) => (
          <li ref={(el) => {
            if (el) listRef.current[index] = el;
          }} key={index}>
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