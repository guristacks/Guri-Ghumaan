import React from "react";
import MobileNav from "./mobileNav";
import Navbar from "./Navbar";
import NavCta from "./NavCta";

const HeaderContent = ({ menuRef, closeRef, navLinkRef, listRef, styles, navLinks }) => {
  return (
    <div className={`${styles.flex} ${styles.sb} ${styles.ac}`}>
      <MobileNav menuRef={menuRef} closeRef={closeRef} styles={styles} />
      <Navbar navLinkRef={navLinkRef} listRef={listRef} styles={styles} navLinks={navLinks} />
      <NavCta styles={styles} />
    </div>
  );
};

export default HeaderContent;