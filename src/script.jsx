import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const Script = () => {
  const lenisRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    // LENIS
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // MOBILE NAVBAR
    const menuBtn = document.querySelector(".menuBtn");
    const closeBtn = document.querySelector(".closeBtn");
    const navLinks = document.querySelector(".nav-links");
    const list = document.querySelectorAll(".nav-links li");

    let isMenuOpen = false;

    const openMenu = () => {
      isMenuOpen = true;

      menuBtn.style.display = "none";
      closeBtn.style.display = "flex";

      gsap.to(list, {
        display: "flex",
        y: 10,
        duration: 0.2,
        stagger: 0.05,
      });
    };

    const closeMenu = () => {
      isMenuOpen = false;

      menuBtn.style.display = "flex";
      closeBtn.style.display = "none";

      gsap.to(list, {
        display: "none",
        y: -10,
        duration: 0.2,
        stagger: -0.05,
      });
    };

    const handleOutsideClick = (e) => {
      if (
        isMenuOpen &&
        !navLinks?.contains(e.target) &&
        !menuBtn?.contains(e.target) &&
        !closeBtn?.contains(e.target)
      ) {
        closeMenu();
      }
    };

    if (window.innerWidth < 1025) {
      menuBtn?.addEventListener("click", openMenu);
      closeBtn?.addEventListener("click", closeMenu);

      document.addEventListener("click", handleOutsideClick);
    }

    ScrollTrigger.refresh();

    // CLEANUP
    return () => {
      gsap.ticker.remove(update);

      lenis.destroy();

      document.removeEventListener("click", handleOutsideClick);

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      menuBtn?.removeEventListener("click", openMenu);
      closeBtn?.removeEventListener("click", closeMenu);
    };
  }, [location.pathname]);

  return null;
};

export default Script;
