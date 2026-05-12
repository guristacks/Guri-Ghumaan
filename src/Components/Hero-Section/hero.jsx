import React from "react";
import HeroContent from "./heroContent";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
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
  });

  return (
    <section className="hero flex ac jc">
      <div className="container">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
