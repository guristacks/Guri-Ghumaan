import React from "react";
import { ArrowDownLeft } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content f-clmn">
          <div className="foot-text flex ac sb">
            <div className="footImg flex">
              <img src="" alt="" />
              <p>
                Let's Work <br /> Together
              </p>
            </div>

            <div className="footArrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-down-left-icon lucide-arrow-down-left"
              >
                <path d="M17 7 7 17" />
                <path d="M17 17H7V7" />
              </svg>
            </div>

            <a class="footCta flex ac" href="#">
              Get in Touch
            </a>
          </div>

          <div className="footMiddle flex ac">
            <a target="_blank" href="mailto:guristacks@gmail.com">guristacks@gmail.com</a>
            <a target="_blank" href="tel:+917696992194">+91 7696 992194</a>
          </div>

          <div className="footBottom flex ac sb">
            <div className="reserve flex f-clmn">
              <small> Version</small>
              <p>© 2024 Guri Ghumaan. All rights reserved.</p>
            </div>

            <div className="footLinks flex f-clmn ac sb">
              <small> Socials</small>
              <div className="socialLinks flex ac">
                <a target="_blank" href="https://www.linkedin.com/in/guristacks">LinkedIn</a>
                <a target="_blank" href="https://www.instagram.com/guri_ghumxn/">Instagram</a>
                <a target="_blank" href="https://github.com/guristacks">GitHub</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
