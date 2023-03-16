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
  image:
    "https://images.unsplash.com/photo-1445966275305-9806327ea2b5?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=14a02fab1200216368d682ecaa91e540"
};
