import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WebVidAnime = ({ sectionRef, topRef, bottomRef }) => {
  useGSAP(
    () => {
      if (window.innerWidth > 768) {
        gsap.fromTo(
          topRef.current,
          { x: "0%" },
          {
            x: "-45%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );

        gsap.fromTo(
          bottomRef.current,
          { x: "-45%" },
          {
            x: "0%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      } else{
        gsap.fromTo(
          topRef.current,
          { x: "0%" },
          {
            x: "-65%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );

        gsap.fromTo(
          bottomRef.current,
          { x: "-60%" },
          {
            x: "0%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      }
    },
  );

  return null;
};

export default WebVidAnime;
