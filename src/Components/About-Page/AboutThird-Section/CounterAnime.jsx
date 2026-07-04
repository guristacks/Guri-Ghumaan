import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CounterAnimation = ({ counterRefs, sectionRef }) => {
  useGSAP(() => {
    counterRefs.current.forEach((counter) => {
      const endValue = Number(counter.dataset.value);
      const prefix = counter.dataset.prefix || "";
      const suffix = counter.dataset.suffix || "";

      const obj = { value: 1 };

      gsap.to(obj, {
        value: endValue,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          counter.textContent = prefix + Math.floor(obj.value) + suffix;
        },
      });
    });
  }, []);

  return null;
};

export default CounterAnimation;
