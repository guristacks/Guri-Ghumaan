import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const FooterAnime = ({ footBtn }) => {
  useGSAP(() => {
    const tween = gsap.from(footBtn.current, {
      left: window.innerWidth < 768 ? "30%" : "60%",
      scrollTrigger: {
        trigger: footBtn.current,
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

export default FooterAnime;
