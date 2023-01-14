import { CardText } from "components/CardText";
import { FC } from "react";
import { HomeAboutData } from "../../data/HomeAboutData";

export const HomeAbout: FC = () => <CardText {...HomeAboutData} />;
