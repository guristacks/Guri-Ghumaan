import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WebVidAnime = ({ topRef, bottomRef }) => {
  useGSAP(() => {
    const isMobile = window.innerWidth <= 768;

    gsap.fromTo(
      topRef.current,
      {
        x: "0%",
      },
      {
        x: isMobile ? "-65%" : "-35%",
        duration: 8,
        ease: "none",
        repeat: -1,
        yoyo: true,
      },
    );

    gsap.fromTo(
      bottomRef.current,
      {
        x: isMobile ? "-65%" : "-35%",
      },
      {
        x: "0%",
        duration: 8,
        ease: "none",
        repeat: -1,
        yoyo: true,
      },
    );
  });

  return null;
};

export default WebVidAnime;
