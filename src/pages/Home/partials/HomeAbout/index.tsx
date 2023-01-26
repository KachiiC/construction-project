import { CardText } from "components/CardText";
import { FC } from "react";
import { HomeAboutData } from "../../data/HomeAboutData";

export const HomeAbout: FC = () => (
  <div data-aos="fade-right">
    <CardText {...HomeAboutData} />
  </div>
);
