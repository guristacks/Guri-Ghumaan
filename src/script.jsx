import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const Script = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Debounce Function
    const debounce = (fn, wait = 150) => {
      let t;

      return (...args) => {
        clearTimeout(t);

        t = setTimeout(() => {
          fn(...args);
        }, wait);
      };
    };

    // Lenis Smooth Scroll
    let lenis;
    let rafFn;

    const initLenis = () => {
      if (window.innerWidth > 1024 && !lenis) {
        lenis = new Lenis();

        lenis.on("scroll", ScrollTrigger.update);

        rafFn = (time) => {
          lenis.raf(time * 1000);
        };

        gsap.ticker.add(rafFn);
        gsap.ticker.lagSmoothing(0);
      }
    };

    const destroyLenis = () => {
      if (lenis) {
        gsap.ticker.remove(rafFn);
        lenis.destroy();
        lenis = null;
      }
    };

    initLenis();

    const handleResize = debounce(() => {
      if (window.innerWidth > 1024) {
        initLenis();
      } else {
        destroyLenis();
      }
    }, 200);

    window.addEventListener("resize", handleResize);

    // Mobile Navbar Animation
    const menuBtn = document.querySelector(".menuBtn");
    const closeBtn = document.querySelector(".closeBtn");
    const list = document.querySelectorAll(".nav-links li");

    const openMenu = () => {
      menuBtn.style.display = "none";
      closeBtn.style.display = "flex";

      gsap.to(list, {
        display: "flex",
        y: "10px",
        duration: 0.1,
        stagger: -0.1,
      });
    };

    const closeMenu = () => {
      menuBtn.style.display = "flex";
      closeBtn.style.display = "none";

      gsap.to(list, {
        display: "none",
        y: "-10px",
        duration: 0.1,
        stagger: -0.1,
      });
    };

    if (window.innerWidth < 769) {
      menuBtn?.addEventListener("click", openMenu);
      closeBtn?.addEventListener("click", closeMenu);
    }

    // Hero Parallax
    gsap.to(".name", {
      y: -120,
      ease: "none",

      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Work Section Animation
    gsap.from(".work-title", {
      y: 40,
      opacity: 0,

      scrollTrigger: {
        trigger: ".work-title",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });

    [".site0", ".site1", ".site2"].forEach((site) => {
      gsap.from(site, {
        y: 40,
        opacity: 0,
        scale: 0.9,

        scrollTrigger: {
          trigger: site,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      });
    });

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      destroyLenis();

      menuBtn?.removeEventListener("click", openMenu);
      closeBtn?.removeEventListener("click", closeMenu);

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
};

export default Script;
