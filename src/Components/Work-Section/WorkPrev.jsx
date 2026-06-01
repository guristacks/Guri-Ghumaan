import { useRef, useEffect } from "react";
import Stacks from "../../assets/Images/Work/stacks-mockup.webp";
import NexaWave from "../../assets/Images/Work/nexa-mockup.webp";
import Aurum from "../../assets/Images/Work/aurum-mockup.webp";
import Elena from "../../assets/Images/Work/elena-mockup.webp";
import "./work.css"
import gsap from "gsap";

const projects = [
    {
        title: "Stacks",
        type: "IT Agency Landing Page",
        link: "https://stacks-design-development.vercel.app/",
        image: Stacks,
        date: "2026"
    },
    {
        title: "Nexa Wave",
        type: "Ai Agency Website",
        link: "https://nexa-wave-agency.vercel.app/",
        image: NexaWave,
        date: "2026"
    },
    {
        title: "Aurum Luxe",
        type: "Jewellery Shop Landing Page",
        link: "https://aurum-luxe-jewellery.vercel.app/",
        image: Aurum,
        date: "2026"
    },
    {
        title: "Elena Morgan",
        type: "Photography Portfolio",
        link: "https://elena-morgan.vercel.app/",
        image: Elena,
        date: "2026"
    },
];

export default function WorkPreview() {
    const imageWrapperRef = useRef(null);

    useEffect(() => {
        const wrapper = imageWrapperRef.current;
        const moveMouse = (e) => {
            if (window.innerWidth > 1024) {
                gsap.to(wrapper, {
                    x: e.clientX - 200,
                    y: e.clientY - 150,
                    duration: 1,
                    ease: "power3.out",
                });
            }
        };
        window.addEventListener("mousemove", moveMouse);
        return () => {
            window.removeEventListener("mousemove", moveMouse);
        };
    }, []);

    const handleHover = (index) => {

        gsap.to(".preview-track", {
            y: `-${index * 25}%`,
            duration: 0.3,
            ease: "power3.inOut",
        });

        gsap.to(imageWrapperRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
        });
    };

    const hidePreview = () => {
        gsap.to(imageWrapperRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
        });
    };

    return (
        <section id="Work" className="work-preview">
            <div className="container">
                <div className="work-container">

                    {/* Desktop Layout */}
                    <div className="desktop-projects">
                        {projects.map((item, index) => (
                            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                                <div
                                    className="project-row flex sb ac"
                                    onMouseEnter={() => handleHover(index)}
                                    onMouseLeave={hidePreview} >
                                    <h2>{item.title}</h2>
                                    <p>{item.type}</p>
                                </div>
                            </a>

                        ))}
                    </div>

                    {/* Tablet + Mobile Layout */}
                    <div className="mobile-projects">
                        {projects.map((item, index) => (
                            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer"
                                className="mobile-card" >
                                <img src={item.image} alt={item.title} />
                                <h2>{item.title}</h2>

                                <div className="itemAndDate flex ac sb">
                                    <p>{item.type}</p>
                                    <p>{item.date}</p>
                                </div>

                            </a>
                        ))}
                    </div>

                    <div className="workCta flex ac jc">
                        <button className="fancy-btn">
                            More Work <sup>11</sup>
                        </button>
                    </div>

                    {/* Hover Preview */}
                    <div className="image-preview" ref={imageWrapperRef}>
                        <div className="preview-track">
                            {projects.map((item, index) => (
                                <div className="preview-image" key={index}>
                                    <img src={item.image} alt={item.title} />

                                    <div className="viewCursor flex ac jc">
                                        <p>View</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
