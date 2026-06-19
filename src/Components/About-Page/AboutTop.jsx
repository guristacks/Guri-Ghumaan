import React from "react";

const AboutTop = ({ styles, helloRef, blackRef }) => {
    return (
        <section className={styles.AboutTopSec}>
            <div ref={blackRef} className={`${styles.black} ${styles.flex} ${styles.ac} ${styles.jc}`}>
                <h2 ref={helloRef} className={styles.helloText}>• About</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.TopContent}>
                    <h2>Crafting scalable web experiences. </h2>
                    <div className={`${styles.TopBtm} ${styles.flex} ${styles.ac} ${styles.sb}`}>
                        <p>Branding</p>
                        <p>Design</p>
                        <p>Development</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTop;