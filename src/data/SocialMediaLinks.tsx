import { InstagramOutlined } from "@ant-design/icons";

export const SocialMediaIconsList = (fontSize: string, color: string) => {
  const style = { fontSize, color };
  return [
    {
      icon: <InstagramOutlined style={style} />,
      link: "https://www.instagram.com/vvspropertygroup/"
    }
    // {
    //   icon: <FacebookOutlined style={style} />,
    //   link: "https://www.facebook.com/"
    // },
    // {
    //   icon: <LinkedinOutlined style={style} />,
    //   link: "https://www.linkedin.com/"
    // },
    // {
    //   icon: <YoutubeOutlined style={style} />,
    //   link: "https://www.youtube.com/"
    // }
  ];
};
