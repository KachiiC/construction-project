import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined
} from "@ant-design/icons";

export const servicesLink = [
  {
    title: "Plumbing",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Heating",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Electrics",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Drains",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Carpentry",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Locks",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Building",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Roofing",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Kitchens",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Bathrooms",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Windows",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Waste Removals",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Painting & Decorating",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "General Maintenance",
    link: "https://www.philbysltd.com/"
  }
];

export const legalLinks = [
  {
    title: "Careers",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Terms & Conditions",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Website Terms of Use",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Privacy Policy",
    link: "https://www.philbysltd.com/"
  },
  {
    title: "Cookie Policy",
    link: "https://www.philbysltd.com/"
  }
];

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
