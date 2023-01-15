import "./Hero.scss";

import { IHero } from "./Hero.styles";

export const Hero = ({
  title,
  subTitle,
  description,
  images,
  icons
}: IHero) => {
  return (
    <div className="home-hero">
      <div className="hero"></div>
      <div className="header">{title}</div>
      <div className="content">
        <div className="heading">
          <h3>{subTitle}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="small-img small1"></div>
      <div className="small-img small2"></div>
      <div className="small-img small3"></div>
      <div className="readmore">
        <img src={images.main} alt="" />
      </div>
      <div className="social">
        {icons?.map(({ link, icon }) => {
          return (
            <a href={link} target="_blank" rel="noreferrer">
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};
