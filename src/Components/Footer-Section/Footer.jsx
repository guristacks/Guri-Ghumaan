import React from "react";
import { ArrowDownLeft } from "lucide-react";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";

const Footer = () => {

  return (
    <footer>
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
