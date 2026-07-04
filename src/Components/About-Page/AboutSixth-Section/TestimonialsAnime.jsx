import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TestimonialsAnime = ({ testimonialsRef }) => {
    
  useGSAP(() => {
    gsap.to(testimonialsRef.current, {
      x: -1675,
      duration: 30,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return null;
};

export default TestimonialsAnime;
