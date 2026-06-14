import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPrevAnime = ({ AboutBtn }) => {
    useGSAP(() => {
        if (window.innerWidth < 768) {
            gsap.from(AboutBtn.current, {
                left: "30%",
                scrollTrigger: {
                    trigger: AboutBtn.current,
                    start: "top 100%",
                    end: "top 80%",
                    scrub: 1,
                },
            });
        } else {
            gsap.from(AboutBtn.current, {
                left: "60%",
                scrollTrigger: {
                    trigger: AboutBtn.current,
                    start: "top 110%",
                    end: "top 80%",
                    scrub: 1,
                },
            });
        }


    });

    return null;
};

export default AboutPrevAnime;