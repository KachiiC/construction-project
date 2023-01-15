import "./Hero.scss";

import {
  HeroMainImageDiv,
  SmallImageOneDiv,
  SmallImageThreeDiv,
  SmallImageTwoDiv
} from "./Hero.styles";

import { IHero } from "./Hero.types";

export const Hero = ({
  title,
  subTitle,
  description,
  images,
  icons
}: IHero) => {
  const iconList = icons?.map(({ link, icon }) => (
    <a href={link} target="_blank" rel="noreferrer">
      {icon}
    </a>
  ));

  const { main, smallImageOne, smallImageTwo, smallImageThree } = images;

  return (
    <div className="hero-container">
      <HeroMainImageDiv image={main} />
      <div className="header">{title}</div>
      <div className="content">
        <div className="heading">
          <h3>{subTitle}</h3>
          <p>{description}</p>
        </div>
      </div>
      <SmallImageOneDiv image={smallImageOne} />
      <SmallImageTwoDiv image={smallImageTwo} />
      <SmallImageThreeDiv image={smallImageThree} />
      <div className="social">{iconList}</div>
    </div>
  );
};
