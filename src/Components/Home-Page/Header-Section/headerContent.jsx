import React from "react";
import MobileNav from "./mobileNav";
import Navbar from "./Navbar";
import NavCta from "./NavCta";

const HeaderContent = ({
  menuRef,
  closeRef,
  navLinkRef,
  listRef,
  styles,
  navLinks,
  isDark,
}) => {
  return (
    <div className={`${styles.flex} ${styles.sb} ${styles.ac}`}>
      <NavCta styles={styles} isDark={isDark} />
      <MobileNav
        menuRef={menuRef}
        closeRef={closeRef}
        styles={styles}
        isDark={isDark}
      />
      <Navbar
        navLinkRef={navLinkRef}
        listRef={listRef}
        styles={styles}
        navLinks={navLinks}
        isDark={isDark}
      />
    </div>
  );
};

export default HeaderContent;
