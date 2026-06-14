import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Home-Page/Header-Section/header";
import Footer from "../Home-Page/Footer-Section/Footer";
import styles from "./Services.module.css";
import { MoveDownRight } from "lucide-react";
import ServicesAnime from "./ServicesAnime";

const Services = () => {
  const blackRef = useRef(null);
  const helloRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "#Work" },
  ];
  return (
    <>
      <Helmet>
        <title>Services - Guri Ghumaan</title>
        <link rel="canonical" href="https://guri-ghumaan.vercel.app/services" />
      </Helmet>

      <Header navLinks={navLinks} />

      <main>
        <section className={styles.servicesSec}>
          <div
            ref={blackRef}
            className={`${styles.black} ${styles.flex} ${styles.ac} ${styles.jc}`}
          >
            <h2 ref={helloRef} className={styles.helloText}>
              • Services
            </h2>
          </div>

          <div className="container">
            <div className={`${styles.servicesTop} ${styles.flex} ${styles.fClmn}`} >
              <p className={styles.heading}>
                Helping brands thrive <br className={styles.mobileBr} /> in the
                digital world
              </p>
              <div className={`${styles.circle} ${styles.flex} ${styles.ac} ${styles.jc}`} >

              </div>
            </div>
          </div>
        </section>

        <section className={styles.middleSec}>
          <div className="container">
            <div className={`${styles.servicesMiddle} ${styles.flex} ${styles.sb}`}>
              <div className={styles.midArrow}>
                <MoveDownRight sixe={32} color="#000000" />
              </div>

              <div className={`${styles.midDesc} ${styles.flex} ${styles.fClmn}`}>
                <p>
                  I help companies from all over the world with tailor-made
                  solutions. With each project, I push my work to new horizons,
                  always putting quality first.
                </p>
                <p>Always exploring...</p>
              </div>

              <div className={styles.midImg}>
                <img src="https://images.pexels.com/photos/37148305/pexels-photo-37148305.jpeg?_gl=1*1quamf9*_ga*MTk2NTY1NTAwMS4xNzgwMDc1OTcy*_ga_8JE65Q40S6*czE3ODEzNzQ1NDckbzkkZzEkdDE3ODEzNzUwMTUkajQ1JGwwJGgw" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesBottom}>
          <div className={styles.container}>
            <p className={styles.heading2}>
              I can help you with...
            </p>

            <div className={`${styles.allServices} ${styles.grid} ${styles.sb}`}>
              <div className={`${styles.service} ${styles.flex} ${styles.fClmn}`}>
                <div className={`${styles.numbering}`}>
                  <p>01</p>
                </div>
                <div className={`${styles.title}`}>
                  <p>Frontend Development</p>
                </div>
                <div className={`${styles.description}`}>
                  <p>
                    Crafting modern, responsive websites with smooth animations that enhance
                    engagement and user experience.
                  </p>
                </div>
              </div>

              <div className={`${styles.service} ${styles.flex} ${styles.fClmn}`}>
                <div className={`${styles.numbering}`}>
                  <p>02</p>
                </div>
                <div className={`${styles.title}`}>
                  <p>Responsive Web Design</p>
                </div>
                <div className={`${styles.description}`}>
                  <p>
                    Designing fully responsive layouts that deliver consistent experiences
                    across desktops, tablets, and smartphones.
                  </p>
                </div>
              </div>

              <div className={`${styles.service} ${styles.flex} ${styles.fClmn}`}>
                <div className={`${styles.numbering}`}>
                  <p>03</p>
                </div>
                <div className={`${styles.title}`}>
                  <p>Performance Optimization</p>
                </div>
                <div className={`${styles.description}`}>
                  <p>
                    Optimizing website speed, accessibility, and performance to ensure fast
                    loading and smooth interactions.
                  </p>
                </div>
              </div>

              <div className={`${styles.service} ${styles.flex} ${styles.fClmn}`}>
                <div className={`${styles.numbering}`}>
                  <p>04</p>
                </div>
                <div className={`${styles.title}`}>
                  <p>Figma to Code</p>
                </div>
                <div className={`${styles.description}`}>
                  <p>
                    Converting Figma designs into pixel-perfect, responsive, and
                    production-ready websites with clean code.
                  </p>
                </div>
              </div>

              <div className={`${styles.service} ${styles.flex} ${styles.fClmn}`}>
                <div className={`${styles.numbering}`}>
                  <p>05</p>
                </div>
                <div className={`${styles.title}`}>
                  <p>Website Maintenance</p>
                </div>
                <div className={`${styles.description}`}>
                  <p>
                    Providing ongoing updates, bug fixes, and improvements to keep websites
                    running efficiently.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />

      <ServicesAnime blackRef={blackRef} helloRef={helloRef} />
    </>
  );
};

export default Services;
