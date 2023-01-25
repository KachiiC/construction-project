import "./Hero.scss";

import { IHero } from "./Hero.types";

export const Hero = ({ image, icon, title }: IHero) => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero__bg">
          <picture>
            <img src={image} alt="" />
          </picture>
        </div>
        <div className="hero__cnt">
          <img src={icon} alt="" className="hero-svg" />
          {title && <h1>{title}</h1>}
        </div>
      </div>
    </div>
  );
};
