import {
  FacebookOutlined,
  InstagramOutlined,
  LinkOutlined
} from "@ant-design/icons";

import { IHero } from "components/Hero/Hero.styles";

const iconsStyle = { fontSize: "30px", color: "white" };

export const HomeHeroData : IHero = {
  title: "Company Name",
  subTitle: "JB LTD",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit provident, consectetur labore nesciunt dolores est placeat ducimus quasi iure",
  images: {
    main: "",
    smallImageOne: "",
    smallImageTwo: "",
    smallImageThree: ""
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
