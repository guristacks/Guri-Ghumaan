import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Elena from "../../../../src/assets/Images/Work/elena-mockup.webp";
import Nexa from "../../../../src/assets/Images/Work/nexa-mockup.webp";
import Pardeep from "../../../../src/assets/Images/Work/pardeep-mockup.webp";
import Stacks from "../../../../src/assets/Images/Work/stacks-mockup.webp";

const projects = [
  {
    title: "Elena Morgan",
    alt: "Elena Morgan personal portfolio website preview",
    type: "Photography Portfolio",
    category: "Design",
    link: "https://elena-morgan.vercel.app/",
    image: Elena,
    location: "Indonesia",
    service: "UI/UX Design",
    date: "2026",
  },
  {
    title: "Pardeep Singh",
    alt: "Pardeep Singh Portfolio preview",
    type: "Portfolio",
    category: "Development",
    link: "https://pardeep-singh.vercel.app/",
    image: Pardeep,
    location: "Punjab",
    service: "Frontend Development",
    date: "2026",
  },
  {
    title: "Nexa Wave",
    alt: "Nexa Wave",
    type: "Agency",
    category: "Development",
    link: "https://nexa-wave-agency.vercel.app/",
    image: Nexa,
    location: "New York",
    service: "React Development",
    date: "2026",
  },
  {
    title: "Stacks",
    alt: "Stacks",
    type: "Agency",
    category: "Design",
    link: "https://stacks-design-development.vercel.app/",
    image: Stacks,
    location: "Canada",
    service: "Brand Design",
    date: "2026",
  },

  // Dummy Projects

  {
    title: "Aurum Luxe",
    category: "Design",
    image: Elena,
    alt: "",
    type: "Luxury Brand",
    location: "Dubai",
    service: "Website Design",
    date: "2026",
    link: "#",
  },
  {
    title: "Bloom Studio",
    category: "Webflow",
    image: Nexa,
    alt: "",
    type: "Agency",
    location: "London",
    service: "Webflow",
    date: "2026",
    link: "#",
  },
  {
    title: "TravelGo",
    category: "Webflow",
    image: Pardeep,
    alt: "",
    type: "Travel",
    location: "Australia",
    service: "Webflow Development",
    date: "2026",
    link: "#",
  },
  {
    title: "PixelCraft",
    category: "Development",
    image: Stacks,
    alt: "",
    type: "Startup",
    location: "USA",
    service: "React Development",
    date: "2026",
    link: "#",
  },
  {
    title: "Nova Shop",
    category: "Development",
    image: Elena,
    alt: "",
    type: "Ecommerce",
    location: "Germany",
    service: "Next.js",
    date: "2026",
    link: "#",
  },
  {
    title: "GreenLeaf",
    category: "Wordpress",
    image: Nexa,
    alt: "",
    type: "Business",
    location: "Canada",
    service: "WordPress",
    date: "2026",
    link: "#",
  },
  {
    title: "Health Plus",
    category: "Wordpress",
    image: Stacks,
    alt: "",
    type: "Medical",
    location: "India",
    service: "WordPress",
    date: "2026",
    link: "#",
  },
  {
    title: "Creative Lab",
    category: "Design",
    image: Elena,
    alt: "",
    type: "Studio",
    location: "France",
    service: "Brand Identity",
    date: "2026",
    link: "#",
  },
  {
    title: "CodeBase",
    category: "Development",
    image: Pardeep,
    alt: "",
    type: "Software",
    location: "USA",
    service: "Frontend",
    date: "2026",
    link: "#",
  },
  {
    title: "Modern Homes",
    category: "Webflow",
    image: Nexa,
    alt: "",
    type: "Real Estate",
    location: "Singapore",
    service: "Webflow CMS",
    date: "2026",
    link: "#",
  },
];

const ShowCase = ({ styles }) => {
  const imageWrapperRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((item) => item.category === activeCategory);

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
      <section className={styles.workScnd}>
        <div className={styles.container}>
          <div className={styles.workContainer}>
            <div className={`${styles.CatBtns} ${styles.flex} ${styles.ac}`}>
              {["All", "Design", "Webflow", "Development", "Wordpress"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={
                      activeCategory === category ? styles.activeBtn : ""
                    }
                  >
                    {category}

                    <sup>
                      {category === "All"
                        ? projects.length
                        : projects.filter((p) => p.category === category)
                            .length}
                    </sup>
                  </button>
                ),
              )}
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

              {filteredProjects.map((item, index) => (
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
              {filteredProjects.map((item, index) => (
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
                {filteredProjects.map((item, index) => (
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

export default ShowCase;
