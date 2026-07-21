import React from "react";
import { MoveDownRight } from "lucide-react";
import styles from "./Logos.module.css";

const AboutImgSec = () => {
  return (
    <>
      <section className={styles.middleSec}>
        <div className="container">
          <div
            className={`${styles.servicesMiddle} ${styles.flex} ${styles.sb}`}
          >
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
              <img
                src="https://images.pexels.com/photos/18057471/pexels-photo-18057471.jpeg"
                alt="Guri Ghumaan's Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutImgSec;
