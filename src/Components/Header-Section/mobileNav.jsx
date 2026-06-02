import React from "react";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

const MobileNav = () => {
  return (
    <div className="IconCol">
      <button className="menuBtn" aria-label="Open menu">
        <Menu size={30} strokeWidth={1.5} />
      </button>

      <button className="closeBtn" aria-label="Close menu">
        <X size={30} strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default MobileNav;
