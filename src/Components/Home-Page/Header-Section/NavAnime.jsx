import { useEffect } from "react";
import { gsap } from "gsap";

export default function NavAnime({ menuRef, closeRef, navLinkRef, listRef }) {
  useEffect(() => {
    let isMenuOpen = false;

    const menuEl = menuRef.current;
    const closeEl = closeRef.current;
    const navEl = navLinkRef.current;
    const listEl = listRef.current;

    const openMenu = () => {
      isMenuOpen = true;

      menuEl?.style.setProperty("display", "none");
      closeEl?.style.setProperty("display", "flex");

      gsap.set(listEl, {
        display: "flex",
        opacity: 0,
      });

      gsap.to(listEl, {
        y: 10,
        opacity: 1,
        duration: 0.2,
        stagger: 0.05,
      });
    };

    const closeMenu = () => {
      isMenuOpen = false;

      menuEl?.style.setProperty("display", "flex");
      closeEl?.style.setProperty("display", "none");

      gsap.to(listEl, {
        y: -10,
        opacity: 0,
        duration: 0.2,
        stagger: -0.05,
        onComplete: () => {
          gsap.set(listEl, { display: "none" });
        },
      });
    };

    const handleOutsideClick = (e) => {
      if (
        isMenuOpen &&
        !navEl?.contains(e.target) &&
        !menuEl?.contains(e.target) &&
        !closeEl?.contains(e.target)
      ) {
        closeMenu();
      }
    };

    if (window.innerWidth < 1025) {
      menuEl?.addEventListener("click", openMenu);
      closeEl?.addEventListener("click", closeMenu);
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);

      menuEl?.removeEventListener("click", openMenu);
      closeEl?.removeEventListener("click", closeMenu);
    };
  }, [menuRef, closeRef, navLinkRef, listRef]);

  return null;
}
