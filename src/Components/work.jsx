import React from "react";
import nexaWaveImg from "../assets/Images/Work/nexa-wave-mockup.webp";
import elenaMorganImg from "../assets/Images/Work/elena-morgan-mockup.webp";
import stacksImg from "../assets/Images/Work/stacks-mockup.webp";

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="container">
        <h2 className="work-title">
          RECENT ━ <br /> WORKS FROM <br /> ©2025-2026
        </h2>

        <div className="sites flex f-clmn">
          <div className="site site0 flex">
            <div className="threeImages flex f-clmn">
              <img
                src={nexaWaveImg}
                loading="lazy"
                alt="Modern agency website design"
              />
            </div>

            <div className="siteContent flex f-clmn">
              <div className="identity flex ac sb">
                <p>Website</p>
                <div className="short-id flex ac">
                  <p>• 3 Pages</p>
                  <p>• 2026</p>
                </div>
              </div>

              <h3 className="title">Nexa Wave - Ai Agency</h3>
              <p className="description">
                Nexa Wave Agency builds modern websites, powerful brands, and
                digital experiences that help businesses grow online.
              </p>
              <h4>Teck Stack</h4>
              <div className="techStack flex ac">
                <p>Html 5</p>
                <p>Css 3</p>
                <p>javaScript</p>
                <p>Gsap</p>
                <p>Lenis</p>
              </div>
              <div className="siteBtns flex ac">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="primaryBtn"
                  href="https://nexa-wave-agency.vercel.app/"
                >
                  nexa-wave... <i className="ri-external-link-line"></i>
                </a>

                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="secondaryBtn"
                  href="https://github.com/guristacks/Nexa-Wave-Agency"
                >
                  Github <i className="ri-github-fill"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="site site1 flex">
            <div className="threeImages flex f-clmn">
              <img
                src={elenaMorganImg}
                loading="lazy"
                alt="Elegant photography portfolio"
              />
            </div>

            <div className="siteContent flex f-clmn">
              <div className="identity flex ac sb">
                <p>Portfolio</p>
                <div className="short-id flex ac">
                  <p>• Minimal</p>
                  <p>• 2026</p>
                </div>
              </div>
              <h3 className="title">Elena Morgan - Photography</h3>
              <p className="description">
                Elena Morgan captures timeless portraits, emotional moments, and
                cinematic stories.
              </p>
              <h4>Teck Stack</h4>
              <div className="techStack flex ac">
                <p>Html 5</p>
                <p>Css 3</p>
                <p>javaScript</p>
                <p>Gsap</p>
                <p>typeScript</p>
                <p>next.js</p>
                <p>vibeCode - v0.app</p>
              </div>
              <div className="siteBtns flex ac">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primaryBtn"
                  href="https://elena-morgan.vercel.app/index.html"
                >
                  elena-morgan...
                  <i className="ri-external-link-line"></i>
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondaryBtn"
                  href="https://github.com/guristacks/Elena-Morgan-Photography"
                >
                  Github
                  <i className="ri-github-fill"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="site site2 flex">
            <div className="threeImages flex f-clmn">
              <img
                src={stacksImg}
                loading="lazy"
                alt="Modern web development agency"
              />
            </div>

            <div className="siteContent flex f-clmn">
              <div className="identity flex ac sb">
                <p>Landing Page</p>
                <div className="short-id flex ac">
                  <p>• Agency</p>
                  <p>• 2026</p>
                </div>
              </div>
              <h3 className="title">Stacks - IT Agency</h3>
              <p className="description">
                Stacks creates modern websites, seamless user experiences, and
                powerful digital solutions for businesses.
              </p>
              <h4>Teck Stack</h4>
              <div className="techStack flex ac">
                <p>Html 5</p>
                <p>Css 3</p>
                <p>javaScript</p>
                <p>Gsap</p>
                <p>Lenis</p>
              </div>
              <div className="siteBtns flex ac">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="primaryBtn"
                  href="https://stacks-design-development.vercel.app/"
                >
                  stacks-design... <i className="ri-external-link-line"></i>
                </a>

                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="secondaryBtn"
                  href="https://github.com/guristacks/Stacks-design-development"
                >
                  Github
                  <i className="ri-github-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="workCta flex jc ac">
          <a className="primaryBtn flex" href="#">
            More work <sup>17</sup>{" "}
            <i className="ri-arrow-right-up-long-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
