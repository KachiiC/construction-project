import "./About.scss";

import { AboutDiagram } from "./partials/AboutDiagram";
import { AboutServiceCards } from "./partials/AboutServiceCards";
import { FC } from "react";
import { Hero } from "components/PageComponents/PageHero";

const About: FC = () => (
  <div className="about-page">
    <Hero image={""} title="About Us" />
    <AboutDiagram />
    <AboutServiceCards />
  </div>
);

export default About;
