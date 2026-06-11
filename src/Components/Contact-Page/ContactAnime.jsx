import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const ContactAnime = ({ blackRef, helloRef }) => {
    useGSAP(() => {

        const tl = gsap.timeline();

        tl.from(helloRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.3,
            delay: 0.5,
        })

        tl.to(blackRef.current, {
            yPercent: -100,
            duration: 1,
            ease: "expo.in",
        });

        tl.from("header", {
            opacity: 0,
            duration: 0.3,
            y: -30
        })
    });

    return null;
};

export default ContactAnime;
