import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const Script = () => {
  const lenisRef = useRef(null);

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
    const list = document.querySelectorAll(".nav-links li");

    const openMenu = () => {
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
      menuBtn.style.display = "flex";
      closeBtn.style.display = "none";

      gsap.to(list, {
        display: "none",
        y: -10,
        duration: 0.2,
        stagger: -0.05,
      });
    };

    if (window.innerWidth < 1025) {
      menuBtn?.addEventListener("click", openMenu);
      closeBtn?.addEventListener("click", closeMenu);
    }

    ScrollTrigger.refresh();

    // CLEANUP
    return () => {
      gsap.ticker.remove(update);

      lenis.destroy();

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      menuBtn?.removeEventListener("click", openMenu);
      closeBtn?.removeEventListener("click", closeMenu);
    };
  }, []);

  return null;
};

export default Script;
