import "./ServiceCards.scss";

import { FC } from "react";
import { Link } from "react-router-dom";
import { PageSection } from "components/PageComponents/PageSection";
import { ServicesCardsData } from "data/Services/ServiceCardsData";
import { lowerCaseDash } from "utils/routeHelper";

const displayedHomeCards = ServicesCardsData.map(({ title, image }) => (
  <Link
    to={`/${lowerCaseDash(title)}`}
    key={title}
    className="service-cards-link-container"
  >
    <img src={image} alt="" />
    <h3>{title}</h3>
  </Link>
));

export const ServiceCards: FC = () => (
  <PageSection duration="1000" transition="zoom-in" margin="60px 20px">
    <>
      <h1>Our services</h1>
      <div className="service-cards-link-wrapper">{displayedHomeCards}</div>
    </>
  </PageSection>
);
