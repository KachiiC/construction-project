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
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          VVS Property Group Ltd directors have over 10 years within the
          industry. Working for private, commercial clients and local
          authorities, delivering anything from large and small refurbishment to
          small repairs and maintenance.
        </p>
        <p>
          Customer service has always been at the forefront of our business
          model, and we strive to offer straightforward solutions customised to
          each client's unique needs.
        </p>
        <p>
          By working with a variety of suppliers and manufacturers, we're able
          to provide top-of-the-line products and services. When combined with
          our friendly, customer-focused approach, you get a company that truly
          cares about its clients and goes above and beyond to offer a
          professional service to help you create a truly unique and unmatched
          space every time.
        </p>
      </div>
    </PageSection>
    <PageSection transition="fade-right" duration="7000">
      <>
        <div className="about-banner">
          <img
            src={AboutBannerImg}
            alt="about-banner"
            className="about-banner"
          />
        </div>
      </>
    </PageSection>
    <ServiceCards />
  </div>
);

export default About;
