import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesBottom = ({ styles }) => {
  const ServicesInfo = [
    {
      num: "01",
      title: "Frontend Development",
      details:
        "Crafting modern, responsive websites with smooth animations that enhance engagement and user experience.",
    },
    {
      num: "02",
      title: "Responsive Web Design",
      details:
        "Designing fully responsive layouts that deliver consistent experiences across desktops, tablets, and smartphones.",
    },
    {
      num: "03",
      title: "Performance Optimization",
      details:
        "Optimizing website speed, accessibility, and performance to ensure fast loading and smooth interactions.",
    },
    {
      num: "04",
      title: "Figma to Code",
      details:
        "Converting Figma designs into pixel-perfect, responsive, and production-ready websites with clean code.",
    },
    {
      num: "05",
      title: "Website Maintenance",
      details:
        "Providing ongoing updates, bug fixes, and improvements to keep websites running efficiently.",
    },
  ];

  return (
    <section className={styles.servicesBottom}>
      <div className={styles.container}>
        <p className={styles.heading2}>I can help you with...</p>

        <div className={`${styles.allServices} ${styles.grid} ${styles.sb}`}>
          {ServicesInfo.map((service) => (
            <ServiceCard key={service.num} service={service} styles={styles} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBottom;
