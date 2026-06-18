import React, { useRef } from "react";
import styles from "./WebVid.module.css";
import WebVidAnime from "./WebVidAnime";

const WebVid = () => {
  const sectionRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const TopVidInfo = [
    { url: "/Videos/Top1.mp4" },
    { url: "/Videos/Top2.mp4" },
    { url: "/Videos/Top3.mp4" },
    { url: "/Videos/Top4.mp4" },
    { url: "/Videos/Top5.mp4" },
  ];

  const BottomVidInfo = [
    { url: "/Videos/Bottom1.mp4" },
    { url: "/Videos/Bottom2.mp4" },
    { url: "/Videos/Bottom3.mp4" },
    { url: "/Videos/Bottom4.mp4" },
    { url: "/Videos/Bottom5.mp4" },
  ];

  return (
    <>
      <section ref={sectionRef} className={styles.WebVidSec}>
        <div
          ref={topRef}
          className={`${styles.TopContent} ${styles.flex} ${styles.ac}`}
        >
          {TopVidInfo.map((video, index) => (
            <div key={index} className={styles.VideoCard}>
              <video src={video.url} autoPlay muted loop playsInline preload="none" />
            </div>
          ))}
        </div>

        <div
          ref={bottomRef}
          className={`${styles.BottomContent} ${styles.flex} ${styles.ac}`}
        >
          {BottomVidInfo.map((video, index) => (
            <div key={index} className={styles.VideoCard}>
              <video src={video.url} autoPlay muted loop playsInline preload="none" />
            </div>
          ))}
        </div>
        <WebVidAnime
          sectionRef={sectionRef}
          topRef={topRef}
          bottomRef={bottomRef}
        />
      </section>
    </>
  );
};

export default WebVid;
