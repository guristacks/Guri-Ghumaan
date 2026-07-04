import React, { useRef } from "react";
import CounterAnimation from "./CounterAnime";
import styles from "./AboutThird.module.css";

const stats = [
  {
    Result: "$74M",
    Value: 74,
    Suffix: "M",
    Prefix: "$",
    Reason: "Driving growth with strategy.",
  },
  {
    Result: "95%",
    Value: 95,
    Suffix: "%",
    Prefix: "",
    Reason: "Building trusted partnerships.",
  },
  {
    Result: "225+",
    Value: 225,
    Suffix: "+",
    Prefix: "",
    Reason: "Delivering industry success.",
  },
  {
    Result: "92%",
    Value: 92,
    Suffix: "%",
    Prefix: "",
    Reason: "Turning traffic into growth.",
  },
];

const AboutThird = () => {
  const counterRefs = useRef([]);
  const sectionRef = useRef(null);
  return (
    <>
      <section className={styles.AboutThird} ref={sectionRef}>
        <div className={styles.container}>
          <div className={styles.TITLE}>
            <p>✹ Growth Metrics</p>
          </div>
          <div className={styles.ScndContent}>
            <div
              className={`${styles.data} ${styles.flex} ${styles.ac} ${styles.sb}`}
            >
              <div className={`${styles.images} ${styles.flex} ${styles.sb}`}>
                <img
                  className={styles.firstImg}
                  src="https://images.pexels.com/photos/7693199/pexels-photo-7693199.jpeg?_gl=1*bmy9ia*_ga*MTk2NTY1NTAwMS4xNzgwMDc1OTcy*_ga_8JE65Q40S6*czE3ODE4OTUzNzgkbzEwJGcxJHQxNzgxODk2OTE5JGo2MCRsMCRoMA.."
                  alt=""
                />
                <img
                  className={styles.lastImg}
                  src="https://images.pexels.com/photos/6814524/pexels-photo-6814524.jpeg?_gl=1*17y9psa*_ga*MTk2NTY1NTAwMS4xNzgwMDc1OTcy*_ga_8JE65Q40S6*czE3ODE4OTUzNzgkbzEwJGcxJHQxNzgxODk2ODkzJGoxJGwwJGgw"
                  alt=""
                />
              </div>

              <div className={styles.numbers}>
                {stats.map((item, index) => (
                  <div key={index}>
                    <p
                      ref={(el) => (counterRefs.current[index] = el)}
                      data-value={item.Value}
                      data-prefix={item.Prefix}
                      data-suffix={item.Suffix}
                    >
                      {item.Prefix}0{item.Suffix}
                    </p>
                    <p>{item.Reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CounterAnimation counterRefs={counterRefs} sectionRef={sectionRef} />
    </>
  );
};

export default AboutThird;
