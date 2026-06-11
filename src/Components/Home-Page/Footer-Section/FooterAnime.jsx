import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const FooterAnime = ({ footBtn }) => {
    useGSAP(() => {
        gsap.from(footBtn.current, {
            left: "40%",
            scrollTrigger: {
                trigger: "footer",
                start: "top 50%",
                end: "top 30%",
                scrub: 2,
            }
        })
    })


    return null;
}

export default FooterAnime