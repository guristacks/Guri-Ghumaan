import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HeroAnime = ({
  heroRef,
  nameRef,
  fnameRef,
  surnameRef,
  blackRef,
  shortDescRef,
  helloRef,
}) => {
  useGSAP(() => {

    const fromNavigation = sessionStorage.getItem("fromNavigation");

    if (fromNavigation) {
      sessionStorage.removeItem("fromNavigation");

      const tl = gsap.timeline();

      tl.set(helloRef.current, {
        textContent: "• Home",
      });

      tl.fromTo(helloRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.3,
        }
      );

      tl.to({}, { duration: 0.1 });

      tl.to(blackRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "expo.in",
      });

      tl.from([fnameRef.current, surnameRef.current, shortDescRef.current], {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      });

      tl.from("header", {
        opacity: 0,
        duration: 0.3,
        y: -30,
      }, "-=1");

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

      return;
    }

    const greetings = [
      { text: "• Hello", duration: 0.5 },
      { text: "• नमस्ते", duration: 0.03 },
      { text: "• Bonjour", duration: 0.03 },
      { text: "• Ciao", duration: 0.03 },
      { text: "• Olá", duration: 0.03 },
      { text: "• Hallå", duration: 0.03 },
      { text: "• Guten Tag", duration: 0.03 },
      { text: "• Hallo", duration: 0.03 },
    ];

    const tl = gsap.timeline();

    greetings.forEach((item, index) => {
      tl.set(helloRef.current, {
        textContent: item.text,
      });

      tl.fromTo(
        helloRef.current,
        {
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
        }
      );

      tl.to({}, { duration: item.duration });

      if (index !== greetings.length - 1) {
        tl.to(helloRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.1,
        });
      }
    });

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

    tl.from(
      [fnameRef.current, surnameRef.current, shortDescRef.current],
      {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      }
    );

    tl.from(
      "header",
      {
        opacity: 0,
        duration: 0.3,
        y: -30,
      },
      "-=1"
    );
  });

  return null;
};

export default HeroAnime;