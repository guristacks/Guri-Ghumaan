import React from "react";
import { ArrowDownLeft } from "lucide-react";
import styles from "./footer.module.css";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";


const Footer = () => {

  return (
    <footer id="Contact">
      <div className={styles.container}>
        <div className={`${styles.footerContent} ${styles.fClmn}`}>

          <FooterTop styles={styles} />

          <FooterMiddle styles={styles} />

          <FooterBottom styles={styles} />


        </div>
      </div>
    </footer>
  );
};

export default Footer;
