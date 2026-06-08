import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Scale } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HeroAnime = ({ heroRef, nameRef, fnameRef, surnameRef, blackRef }) => {
  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.to(nameRef.current, {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
      },
    });

    tl.to(blackRef.current, {
      yPercent: -100,
      duration: 1.5,
      ease: "expo.in",
    });

    tl.from([fnameRef.current, surnameRef.current ], {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });

    tl.from("header", {
      opacity: 0,
      duration: 0.3,
      y: -30
    }, "-=1")
  });

  return null;
};

export default HeroAnime;
