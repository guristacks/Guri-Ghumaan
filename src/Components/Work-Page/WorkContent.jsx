import React from "react";

const WorkTop = ({ styles, blackRef, helloRef }) => {
  return (
    <section className={styles.WorkTop}>
      <div
        ref={blackRef}
        className={`${styles.black} ${styles.flex} ${styles.ac} ${styles.jc}`}
      >
        <h2 ref={helloRef} className={styles.helloText}>
          This Page Is <br /> Under Construction
        </h2>
      </div>
      <div className={styles.container}>
        <div className={styles.WorkTitle}>
          <p>
            Creating next level <br /> digital products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkTop;
