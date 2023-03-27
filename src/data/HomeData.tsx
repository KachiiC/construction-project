import HomeAboutImg from "assets/images/service_images/building/building-8.jpg";
import HomeHero from "assets/images/home-hero.jpg";
import { IHero } from "components/PageComponents/PageHero/Hero.types";
import SvgLogo from "assets/images/vvs-logo-white.png";

export const HomeHeroData: IHero = {
  image: HomeHero,
  icon: SvgLogo
};

export const HomeAboutData = {
  heading: "VVS Property Group LTD",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laborum suscipit doloremque, expedita voluptatum maiores corporis modi assumenda esse consectetur error nulla, vero alias.",
  buttonText: "Learn More",
  buttonLink: "/about",
  image: HomeAboutImg
};
