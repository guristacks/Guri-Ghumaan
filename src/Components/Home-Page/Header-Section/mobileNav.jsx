import React from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const MobileNav = ({ menuRef, closeRef, styles, isDark }) => {
  return (
    <div className={styles.IconCol}>
      <button
        ref={menuRef}
        className={styles.menuBtn}
        aria-label="Open menu"
        style={{ color: isDark ? "#000" : "#fff" }}
      >
        <Menu size={30} strokeWidth={1.5} />
      </button>

      <button
        ref={closeRef}
        className={styles.closeBtn}
        aria-label="Close menu"
        style={{ color: isDark ? "#000" : "#fff" }}
      >
        <X size={30} strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default MobileNav;
