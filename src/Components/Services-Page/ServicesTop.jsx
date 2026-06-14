import React from "react";

const ServicesTop = ({ blackRef, helloRef, styles }) => {
  return (
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
        <div className={`${styles.servicesTop} ${styles.flex} ${styles.fClmn}`}>
          <p className={styles.heading}>
            Helping brands thrive <br className={styles.mobileBr} /> in the
            digital world
          </p>
          <div
            className={`${styles.circle} ${styles.flex} ${styles.ac} ${styles.jc}`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTop;
