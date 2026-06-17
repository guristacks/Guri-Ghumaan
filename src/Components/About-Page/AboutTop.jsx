import React from "react";
const AboutTop = ({ styles, helloRef, blackRef }) => {

    return (
        <section className={styles.AboutTopSec}>
            <div ref={blackRef} className={`${styles.black} ${styles.flex} ${styles.ac} ${styles.jc}`}>
                <h2 ref={helloRef} className={styles.helloText}>• About</h2>
            </div>
        </section>
    )
}

export default AboutTop;