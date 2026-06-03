import React, { useRef } from "react";
import styles from "./header.module.css";
import HeaderContent from "./headerContent";
import NavAnime from "./NavAnime";

const Header = ({ navLinks }) => {

  const menuRef = useRef(null);
  const closeRef = useRef(null);
  const navLinkRef = useRef(null);
  const listRef = useRef([]); 

  return (
    <>
      <NavAnime menuRef={menuRef} closeRef={closeRef} navLinkRef={navLinkRef} listRef={listRef} />
      <header className={`${styles.flex} ${styles.ac}`}>
        <div className={styles.container}>
          <HeaderContent menuRef={menuRef} closeRef={closeRef} navLinkRef={navLinkRef} listRef={listRef} styles={styles} navLinks={navLinks} />
        </div>
      </header>
    </>
  );
};

export default Header;