import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "Elena Morgan",
    alt: "Elena Morgan personal portfolio website preview",
    type: "Photography Portfolio",
    category: "Development",
    link: "https://elena-morgan.vercel.app/",
    image: "/Images/Work/elena-mockup.webp",
    location: "Indonesia",
    service: "Design & Development",
    date: "2026",
  },
  {
    title: "Pardeep Singh",
    alt: "Pardeep Singh Portfolio preview",
    type: "Portfolio",
    category: "Development",
    link: "https://pardeep-singh.vercel.app/",
    image: "/Images/Work/pardeep-mockup.webp",
    location: "Dhuri, Punjab",
    service: "Design & Development",
    date: "2026",
  },
  {
    title: "Nexa Wave",
    alt: "Nexa Wave",
    type: "Agency",
    category: "Development",
    link: "https://nexa-wave-agency.vercel.app/",
    image: "/Images/Work/nexa-mockup.webp",
    location: "New York",
    service: "Design & Development",
    date: "2026",
  },
  {
    title: "Stacks",
    alt: "Stacks",
    type: "Agency",
    category: "Development",
    link: "https://stacks-design-development.vercel.app/",
    image: "/Images/Work/stacks-mockup.webp",
    location: "Canada",
    service: "Design & Development",
    date: "2026",
  },
  {
    title: "Vit Calendar",
    category: "Webflow",
    image: "/Images/WorkPage/SS1.webp",
    alt: "Maya Visnyei's Website image",
    type: "Digital Calendar",
    location: "Canada",
    service: "Webflow Development",
    date: "2026",
    link: "#",
  },
  {
    title: "Swipeeely",
    category: "Webflow",
    image: "/Images/WorkPage/SS2.webp",
    alt: "",
    type: "Digital Card",
    location: "Australia",
    service: "Webflow Development",
    date: "2026",
    link: "#",
  },
  {
    title: "Janice D’Souza",
    category: "Wordpress",
    image: "/Images/WorkPage/SS3.webp",
    alt: "Makeup Artist Janice D’Souza's Website image",
    type: "Makeup Artist",
    location: "Goa, India",
    service: "WordPress Development",
    date: "2026",
    link: "#",
  },
  {
    title: "Dhun Wellness",
    category: "Wordpress",
    image: "/Images/WorkPage/SS4.webp",
    alt: "",
    type: "Wellness Club",
    location: "Mumbai, India",
    service: "WordPress Development",
    date: "2026",
    link: "#",
  },
  {
    title: "Riley",
    category: "Design",
    image: "/Images/WorkPage/SS5.webp",
    alt: "",
    type: "Studio",
    location: "France",
    service: "Design",
    date: "2026",
    link: "#",
  },
  {
    title: "Golf Pro",
    category: "Design",
    image: "/Images/WorkPage/SS6.webp",
    alt: "",
    type: "Golf Club",
    location: "USA",
    service: "Design",
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
