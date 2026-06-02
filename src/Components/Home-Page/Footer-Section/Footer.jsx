import React from "react";
import { ArrowDownLeft } from "lucide-react";
import "./footer.css";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";

const Footer = () => {

  return (
    <footer id="Contact">
      <div className="container">
        <div className="footer-content f-clmn">

          <FooterTop />

          <FooterMiddle />

          <FooterBottom />


        </div>
      </div>
    </footer>
  );
};

export default Footer;
