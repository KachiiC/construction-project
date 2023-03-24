import "./About.scss";

import AboutBannerImg from "assets/images/about-banner.png";
import AboutImg from "assets/images/about.jpg";
import { FC } from "react";
import { Hero } from "components/PageComponents/PageHero";
import { PageSection } from "components/PageComponents/PageSection";
import { ServiceCards } from "components/ServiceCards";

const About: FC = () => (
  <div className="about-page">
    <Hero image={AboutImg} title="About Us" />
    <PageSection transition="fade-right" duration="7000">
      <>
        <div className="about-banner">
          <img
            src={AboutBannerImg}
            alt="about-banner"
            className="about-banner"
          />
        </div>
        <ServiceCards />
      </>
    </PageSection>
  </div>
);

export default About;
