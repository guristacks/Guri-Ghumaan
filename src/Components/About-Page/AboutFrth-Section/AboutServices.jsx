import React from "react";
import AboutCard from "./AboutCard";
import styles from "./AboutService.module.css";
const ServicesInfo = [
  {
    num: "01",
    title: "Frontend Development",
    details:
      "Building fast, responsive websites with clean code, seamless interactions, and engaging user experiences across devices.",
  },
  {
    num: "02",
    title: "Portfolio Websites",
    details:
      "Crafting unique portfolio websites that showcase your work, strengthen your personal brand, and attract clients.",
  },
  {
    num: "03",
    title: "Business Websites",
    details:
      "Creating professional business websites that build trust, highlight your services, and convert visitors into customers.",
  },
  {
    num: "04",
    title: "WordPress Development",
    details:
      "Developing modern WordPress websites with responsive layouts, clean design, and an easy content management system.",
  },
  {
    num: "05",
    title: "Webflow Development",
    details:
      "Building responsive, visually stunning, and easy-to-manage Webflow websites with clean structure and smooth interactions.",
  },
  {
    num: "06",
    title: "Website Rebuild",
    details:
      "Rebuilding outdated websites with modern design, optimized performance, refreshed content, and improved functionality.",
  },
  {
    num: "07",
    title: "Website Maintenance",
    details:
      "Providing ongoing updates, bug fixes, and improvements to keep websites running efficiently.",
  },
  {
    num: "08",
    title: "Performance Optimization",
    details:
      "Optimizing website speed, accessibility, and performance to ensure fast loading and smooth interactions.",
  },
  {
    num: "09",
    title: "Figma to Code",
    details:
      "Converting Figma designs into pixel-perfect, responsive, and production-ready websites with clean code.",
  },
];

const AboutServices = () => {
  return (
    <section id="services" className={styles.servicesBottom}>
      <div className={styles.container}>
        <h2 className={styles.servicesHeading}>I can help you with... </h2>

        <div className={`${styles.allServices} ${styles.grid} ${styles.sb}`}>
          {ServicesInfo.map((service) => (
            <AboutCard key={service.num} service={service} styles={styles} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
