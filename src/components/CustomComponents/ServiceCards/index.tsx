import "./ServiceCards.scss";

import { FC } from "react";
import { Link } from "react-router-dom";
import { ServicesCardsData } from "data/Services/ServiceCardsData";
import { lowerCaseDash } from "utils/routeHelper";

export const ServiceCards: FC = () => {
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

  return (
    <>
      <h1>Our services</h1>
      <div className="service-cards-link-wrapper">{displayedHomeCards}</div>
    </>
  );
};
