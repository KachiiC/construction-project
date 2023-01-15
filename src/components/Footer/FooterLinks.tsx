import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined
} from "@ant-design/icons";

import { IFooterLinks } from "./Footer.types";
import { legalList } from "data/LegalData";
import { serviceList } from "data/ServicesData";

export const FooterIconsList = (fontSize: string, color: string) => {
  const style = { fontSize, color };
  return [
    {
      icon: <FacebookOutlined style={style} />,
      link: "https://www.facebook.com/"
    },
    {
      icon: <LinkedinOutlined style={style} />,
      link: "https://www.linkedin.com/"
    },
    {
      icon: <InstagramOutlined style={style} />,
      link: "https://www.instagram.com/"
    },
    {
      icon: <YoutubeOutlined style={style} />,
      link: "https://www.youtube.com/"
    }
  ];
};

export const displayedLinks: IFooterLinks[] = [
  {
    section: "Our Services",
    links: Object.keys(serviceList)
  },
  {
    section: "Legal & More",
    links: Object.keys(legalList)
  }
];
