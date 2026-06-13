import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const FooterAnime = ({ footBtn }) => {
    useGSAP(() => {
        if (window.innerWidth < 768) {
            gsap.from(footBtn.current, {
                left: "30%",
                scrollTrigger: {
                    trigger: footBtn.current,
                    start: "top 100%",
                    end: "top 80%",
                    scrub: 2,
                }
            })
        } else {
            gsap.from(footBtn.current, {
                left: "60%",
                scrollTrigger: {
                    trigger: footBtn.current,
                    start: "top 110%",
                    end: "top 80%",
                    scrub: 2,
                }
            })
        }
    })


    return null;
}

export default FooterAnime