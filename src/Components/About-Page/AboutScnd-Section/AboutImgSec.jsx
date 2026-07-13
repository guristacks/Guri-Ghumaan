import React, { useRef } from "react";
import { MoveDownRight } from "lucide-react";
import LogoAnimation from "./LogoAnime";
import styles from "./Logos.module.css";

const brands = [
  {
    LogoImg:
      "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefb0c5c9128f0dd58b6_Brand%2007.webp",
    LogoAlt: "Brand 07 company logo",
  },
  {
    LogoImg:
      "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefb0f49bca3c1742f2f_Brand%2003.webp",
    LogoAlt: "Brand 03 company logo",
  },
  {
    LogoImg:
      "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefbeb9a99a07522dd00_Brand%2004.webp",
    LogoAlt: "Brand 04 company logo",
  },
  {
    LogoImg:
      "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefbf5f22f3b3bf85a8a_Brand%2001.webp",
    LogoAlt: "Brand 01 company logo",
  },
  {
    LogoImg:
      "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefb9dd713edf13a284f_Brand%2002.webp",
    LogoAlt: "Brand 02 company logo",
  },
  {
    LogoImg:
      "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefbeb9a99a07522dd00_Brand%2004.webp",
    LogoAlt: "Brand 04 company logo",
  },
  {
    LogoImg:
      "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefb0adf56b97802a9be_Brand%2006.webp",
    LogoAlt: "Brand 06 company logo",
  },
  {
    LogoImg:
      "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefbf5f22f3b3bf85a8a_Brand%2001.webp",
    LogoAlt: "Brand 01 company logo",
  },
  {
    LogoImg:
      "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefb9dd713edf13a284f_Brand%2002.webp",
    LogoAlt: "Brand 02 company logo",
  },
];

const AboutImgSec = () => {
  const logosRef = useRef(null);
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
                src="/public/Images/Guri Zudio.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.logoWrap}>
            <div className={styles.logoTrack} ref={logosRef}>
              {brands.map((brand, index) => (
                <img key={index} src={brand.LogoImg} alt={brand.LogoAlt} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <LogoAnimation logosRef={logosRef} />
    </>
  );
};

export default AboutImgSec;
