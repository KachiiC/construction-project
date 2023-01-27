import "./About.scss";

import { AboutDiagram } from "./partials/AboutDiagram";
import { FC } from "react";
import { Hero } from "components/PageComponents/PageHero";
import { HomeCards } from "pages/Home/partials/HomeCards";

const About: FC = () => (
  <div className="about-page">
    <Hero image={""} title="About Us" />
    <AboutDiagram />
    <HomeCards />
  </div>
);

export default About;
