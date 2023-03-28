import HomeAboutImg from "assets/images/home-about.jpg";
import HomeHero from "assets/images/home-hero.jpg";
import { IHero } from "components/PageComponents/PageHero/Hero.types";
import SvgLogo from "assets/images/vvs-logo-white.png";

export const HomeHeroData: IHero = {
  image: HomeHero,
  icon: SvgLogo
};

export const HomeAboutData = {
  heading: "VVS Property Group LTD",
  text: "VVS Property Group Ltd directors have over 10 years within the industry. Working for private, commercial clients and local authorities,  delivering anything from large and small refurbishment to small repairs and maintenance.",
  buttonText: "Learn More",
  buttonLink: "/about",
  image: HomeAboutImg
};
