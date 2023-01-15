import {
  FacebookOutlined,
  InstagramOutlined,
  LinkOutlined
} from "@ant-design/icons";

import HomeImg from "./images/home-hero.jpg";
import { IHero } from "components/Hero/Hero.types";
import SmallImageOne from "./images/home-hero-small-1.jpg";
import SmallImageThree from "./images/home-hero-small-3.jpg";
import SmallImageTwo from "./images/home-hero-small-2.jpg";

const iconsStyle = { fontSize: "30px", color: "white" };

export const HomeHeroData: IHero = {
  title: "Company Name",
  subTitle: "JB LTD",
  description:
    "No job is too big or too small. Our team of skilled tradespeople can help with a leak or design and build your whole home.",
  images: {
    main: HomeImg,
    smallImageOne: SmallImageOne,
    smallImageTwo: SmallImageTwo,
    smallImageThree: SmallImageThree
  },
  icons: [
    {
      link: "https://linkedin.com/",
      icon: <LinkOutlined style={iconsStyle} />
    },
    {
      link: "https://facebook.com/",
      icon: <FacebookOutlined style={iconsStyle} />
    },
    {
      link: "https://instagram.com/",
      icon: <InstagramOutlined style={iconsStyle} />
    }
  ]
};
