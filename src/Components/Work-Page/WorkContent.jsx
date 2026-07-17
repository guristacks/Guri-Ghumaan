import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Elena from "../../../src/assets/Images/Work/elena-mockup.webp";
import Nexa from "../../../src/assets/Images/Work/nexa-mockup.webp";
import Pardeep from "../../../src/assets/Images/Work/pardeep-mockup.webp";
import Stacks from "../../../src/assets/Images/Work/stacks-mockup.webp";

const projects = [
  {
    title: "Elena Morgan",
    alt: "Elena Morgan personal portfolio website preview",
    type: "Photography Portfolio",
    link: "https://elena-morgan.vercel.app/",
    image: Elena,
    location: "Indonesia",
    service: "Design & Development",
    date: "2026",
  },
  {
    title: "Pardeep Singh",
    alt: "Pardeep Singh's Portfolio preview",
    type: "Graphic Designer's Portfolio",
    link: "https://pardeep-singh.vercel.app/",
    image: Pardeep,
    location: "Dhuri Punjab",
    service: "Design & Development",
    date: "2026",
  },
  {
    title: "Nexa Wave",
    alt: "Nexa Wave digital agency website preview",
    type: "Ai Agency Website",
    link: "https://nexa-wave-agency.vercel.app/",
    image: Nexa,
    location: "New York",
    service: "Design & Development",
    date: "2026",
  },
  {
    title: "Stacks",
    alt: "Stacks project website homepage preview",
    type: "IT Agency Landing Page",
    link: "https://stacks-design-development.vercel.app/",
    image: Stacks,
    location: "Canada",
    service: "Design & Development",
    date: "2026",
  },
];

const WorkTop = ({ styles, blackRef, helloRef }) => {
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
    <>
      <section className={styles.WorkTop}>
        <div
          ref={blackRef}
          className={`${styles.black} ${styles.flex} ${styles.ac} ${styles.jc}`}
        >
          <h2 ref={helloRef} className={styles.helloText}>
            • Work
          </h2>
        </div>

        <div className={styles.container}>
          <div className={styles.WorkTitle}>
            <h3>
              Creating next level <br /> digital products.
            </h3>
          </div>
        </div>
      </section>

      <section className={styles.workScnd}>
        <div className={styles.container}>
          <div className={styles.workContainer}>
            <div className={`${styles.CatBtns} ${styles.flex} ${styles.ac}`}>
              <button>
                All <sup>{projects.length}</sup>
              </button>
              <button>
                Design <sup>{projects.length}</sup>
              </button>
              <button>
                Webflow <sup>{projects.length - projects.length}</sup>
              </button>
              <button>
                Development <sup>{projects.length}</sup>
              </button>
              <button>
                Wordpress <sup>{projects.length - projects.length}</sup>
              </button>
            </div>
            {/* Desktop Layout */}
            <div className={styles.desktopProjects}>
              <div
                className={`${styles.categories} ${styles.flex} ${styles.ac}`}
              >
                <div className={styles.catLeft}>
                  <p>CLIENT</p>
                </div>
                <div
                  className={`${styles.catRight} ${styles.flex} ${styles.ac} ${styles.sb}`}
                >
                  <p>LOCATION</p>
                  <p>SERVICE</p>
                  <p>YEAR</p>
                </div>
              </div>

              {projects.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${styles.projectRow}`}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={hidePreview}
                  >
                    <div
                      className={`${styles.projects} ${styles.flex} ${styles.ac}`}
                    >
                      <div className={styles.catLeft}>
                        <h4>{item.title}</h4>
                      </div>
                      <div
                        className={`${styles.catRight} ${styles.flex} ${styles.ac} ${styles.sb}`}
                      >
                        <p>{item.location}</p>
                        <p>{item.service}</p>
                        <p>{item.date}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Tablet + Mobile Layout */}
            <div className={styles.mobileProjects}>
              {projects.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileCard}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <h4>{item.title}</h4>

                  <div
                    className={`${styles.itemAndDate} ${styles.flex} ${styles.ac} ${styles.sb}`}
                  >
                    <p>{item.type}</p>
                    <p>{item.date}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Hover Preview */}
            <div className={styles.imagePreview} ref={imageWrapperRef}>
              <div className={`${styles.previewTrack} preview-track`}>
                {projects.map((item, index) => (
                  <div className={styles.previewImage} key={index}>
                    <img src={item.image} alt={item.alt} loading="lazy" />

                    <div
                      className={`${styles.viewCursor} ${styles.flex} ${styles.ac} ${styles.jc}`}
                    >
                      <p>View</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkTop;
