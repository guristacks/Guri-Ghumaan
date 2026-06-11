import React,  { useRef } from "react";
import { ArrowDownLeft } from "lucide-react";
import styles from "./footer.module.css";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";
import FooterAnime from "./FooterAnime";


const Footer = () => {
  const footBtn = useRef(null)

  return (
    <footer id="Contact">
      <div className={styles.container}>
        <div className={`${styles.footerContent} ${styles.fClmn}`}>
          <FooterTop footBtn={footBtn} styles={styles} />
          <FooterMiddle styles={styles} />
          <FooterBottom styles={styles} />
          <FooterAnime footBtn={footBtn} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
