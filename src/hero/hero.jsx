import React from "react";
import { HeroStyle } from "./HeroStyle";

const Hero = () => {
  return (
    <HeroStyle>
      <div className="left">
        <h1 className="title">
          Furniture That <br /> Elevates Your <span>Space</span>
        </h1>

        <p className="subtitle">
          Crafted for comfort. Designed for modern living.
        </p>

        <div className="btn-row">
          <button className="shop-btn">Shop Now</button>
          <button className="arrivals-btn">Check New Arrivals</button>
        </div>
      </div>

      <div className="right">
        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1615873968403-89e7c31f2c5a?q=80&w=1200"
          alt="sofa"
        />
      </div>
    </HeroStyle>
  );
};

export default Hero;
