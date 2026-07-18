import React from "react";

const WorkTitle = ({ styles, blackRef, helloRef }) => {
  return (
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
  );
};

export default WorkTitle;
