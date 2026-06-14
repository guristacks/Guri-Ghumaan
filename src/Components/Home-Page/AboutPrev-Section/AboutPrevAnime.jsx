import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPrevAnime = ({ AboutBtn }) => {
  useGSAP(() => {
    const tween = gsap.from(AboutBtn.current, {
      left: window.innerWidth < 768 ? "30%" : "60%",
      scrollTrigger: {
        trigger: AboutBtn.current,
        start: window.innerWidth < 768 ? "top 100%" : "top 110%",
        end: "top 80%",
        scrub: 1,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return null;
};

export default AboutPrevAnime;
