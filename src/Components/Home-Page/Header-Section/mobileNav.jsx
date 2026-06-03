import React from "react";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

const MobileNav = ({ menuRef, closeRef, styles }) => {
  return (
    <div className={styles.IconCol}>
      <button ref={menuRef} className={styles.menuBtn} aria-label="Open menu">
        <Menu size={30} strokeWidth={1.5} />
      </button>

      <button ref={closeRef} className={styles.closeBtn} aria-label="Close menu">
        <X size={30} strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default MobileNav;
