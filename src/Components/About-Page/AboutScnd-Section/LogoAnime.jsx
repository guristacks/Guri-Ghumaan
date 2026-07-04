import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LogoAnimation = ({ logosRef }) => {
  useGSAP(() => {
    gsap.to(logosRef.current, {
      x: -900,
      duration: 25,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return null;
};

export default LogoAnimation;
