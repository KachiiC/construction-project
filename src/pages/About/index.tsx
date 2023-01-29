import "./About.scss";

import { AboutDiagram } from "./partials/AboutDiagram";
import AboutImg from "assets/images/about.jpg";
import { FC } from "react";
import { Hero } from "components/PageComponents/PageHero";
import { ServiceCards } from "components/CustomComponents/ServiceCards";

const About: FC = () => (
  <div className="about-page">
    <Hero image={AboutImg} title="About Us" />
    <div>
      <AboutDiagram />
      <ServiceCards />
    </div>
  </div>
);

export default About;
