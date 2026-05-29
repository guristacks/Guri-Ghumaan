import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HeroAnime = ({ heroRef, nameRef }) => {
  useGSAP(() => {
    gsap.to(nameRef.current, {
      y: -120,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
      },
    });
  }, {scope: heroRef});

  return null;
};

export default HeroAnime;
