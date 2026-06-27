import React, { useRef } from "react";
import styles from "./WebVid.module.css";
import WebVidAnime from "./WebVidAnime";

const WebVid = () => {
  const sectionRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const topImages = [
    { url: "/Images/Top1.webp" },
    { url: "/Images/Top2.webp" },
    { url: "/Images/Top3.webp" },
    { url: "/Images/Top4.webp" },
    { url: "/Images/Top5.webp" },
  ];

  const bottomImages = [
    { url: "/Images/Bottom1.webp" },
    { url: "/Images/Bottom2.webp" },
    { url: "/Images/Bottom3.webp" },
    { url: "/Images/Bottom4.webp" },
    { url: "/Images/Bottom5.webp" },
  ];

  return (
    <section ref={sectionRef} className={styles.WebVidSec}>
      <div
        ref={topRef}
        className={`${styles.TopContent} ${styles.flex} ${styles.ac}`}
      >
        {topImages.map((image, index) => (
          <div key={index} className={styles.VideoCard}>
            <img
              src={image.url}
              alt={`Top ${index + 1}`}
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div
        ref={bottomRef}
        className={`${styles.BottomContent} ${styles.flex} ${styles.ac}`}
      >
        {bottomImages.map((image, index) => (
          <div key={index} className={styles.VideoCard}>
            <img
              src={image.url}
              alt={`Bottom ${index + 1}`}
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <WebVidAnime
        sectionRef={sectionRef}
        topRef={topRef}
        bottomRef={bottomRef}
      />
    </section>
  );
};

export default WebVid;
