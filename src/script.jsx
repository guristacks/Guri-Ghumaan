import { useEffect, useRef } from "react";
import gsap from "gsap";
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

    if (window.innerWidth < 769) {
      menuBtn?.addEventListener("click", openMenu);
      closeBtn?.addEventListener("click", closeMenu);
    }

    // HERO PARALLAX
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

    // WORK SECTION
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

    gsap.utils.toArray(".site").forEach((site) => {
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

    // PROCESS SECTION
    gsap.from(".process-title", {
      y: 40,
      opacity: 0,
      scrollTrigger: {
        trigger: ".process-title",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });

    gsap.utils.toArray(".process").forEach((pro) => {
      gsap.from(pro, {
        y: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: pro,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      });
    });

    gsap.utils.toArray(".process").forEach((card, index) => {
      if (index !== 4) {
        gsap.to(card, {
          scale: 0.8,
          filter: "blur(3px)",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 10%",
            scrub: true,
          },
        });
      }
    });

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
