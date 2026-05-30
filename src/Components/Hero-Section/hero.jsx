import React, { useRef } from "react";
import "./hero.css";
import HeroContent from "./heroContent";
import HeroAnime from "./HeroAnime";

const Hero = () => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);

  return (
    <section className="hero flex ac jc" ref={heroRef}>
      <div className="container">
        <HeroContent nameRef={nameRef} />
        <HeroAnime heroRef={heroRef} nameRef={nameRef} />
      </div>
    </section>
  );
};

export default Hero;
