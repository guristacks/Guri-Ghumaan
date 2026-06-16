import React, { useRef } from "react";
const AboutTop = ({styles}) => {

    const blackRef = useRef(null);
    const helloRef = useRef(null);

    return (
        <section>
            <div ref={blackRef} className={`${styles.black} ${styles.flex} ${styles.ac} ${styles.jc}`}>
                <h2 ref={helloRef} className={styles.helloText}>• Contact</h2>
            </div>
        </section>
    )
}

export default AboutTop