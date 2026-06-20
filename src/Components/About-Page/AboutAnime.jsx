import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const AboutAnime = ({ blackRef, helloRef, logosRef, counterRefs, sectionRef, testimonialsRef }) => {
  useGSAP(() => {
    let scrollY = 0;
    const preventScroll = (e) => {
      e.preventDefault();
    };

    const lockScroll = () => {
      scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    };

    const unlockScroll = () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.scrollTo(0, scrollY);
    };

    lockScroll();

    const tl = gsap.timeline({
      onComplete: () => {
        unlockScroll();
        ScrollTrigger.refresh();
      },
    });

    tl.from(helloRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.3,
      delay: 0.5,
    });

    tl.to(blackRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "expo.in",
    });

    tl.from("header", {
      opacity: 0,
      duration: 0.3,
      y: -30,
    });

    gsap.to(logosRef.current, {
      x: -1100,
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });


    counterRefs.current.forEach((counter) => {
      const endValue = Number(counter.dataset.value);
      const prefix = counter.dataset.prefix || "";
      const suffix = counter.dataset.suffix || "";
      const obj = { value: 1 };
      gsap.to(obj, {
        value: endValue,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          counter.textContent =
            prefix +
            Math.floor(obj.value) +
            suffix;
        },
      });
    });

    gsap.to(testimonialsRef.current, {
      x: -1675,
      duration: 15,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

  });

  return null;
};

export default AboutAnime;
