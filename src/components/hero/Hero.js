import React from "react";
import Slider from "../slider/Slider";
import "./hero.css";

const Hero = ({ children, hero }) => {
  return (
    <header className={hero}>
      {children}
      {hero === "defaultHero" && <Slider />}
    </header>
  );
};

Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
