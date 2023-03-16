import "./About.scss";

import AboutBannerImg from "assets/images/about-banner.png";
import AboutImg from "assets/images/about.jpg";
import { FC } from "react";
import { Hero } from "components/PageComponents/PageHero";
import { ServiceCards } from "components/CustomComponents/ServiceCards";

const About: FC = () => (
  <div className="about-page">
    <Hero image={AboutImg} title="About Us" />

    <div className="about-banner">
      <img src={AboutBannerImg} alt="about-banner" className="about-banner" />
    </div>
    <ServiceCards />
  </div>
);

export default About;
