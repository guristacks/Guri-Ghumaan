import React from "react";
import WorkTitle from "./workTitle";
import WorkCta from "./workCta";
import WebsitePreview from "./websitePreview";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useGSAP(() => {
    gsap.from(".work-title", {
      y: 40,
      opacity: 0,
      scrollTrigger: {
        trigger: ".work-title",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="work" className="work">
      <div className="container">
        <WorkTitle />
        <WebsitePreview />
        <WorkCta />
      </div>
    </section>
  );
};

export default Work;
