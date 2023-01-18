import { FC } from "react";
import { HomeServicesData } from "../../data/HomeCardsData";
import { Link } from "react-router-dom";
import { lowerCaseDash } from "utils/routeHelper";

export const HomeCards: FC = () => {
  const displayedHomeCards = HomeServicesData.map(({ title, image }) => (
    <Link
      to={`/${lowerCaseDash(title)}`}
      key={title}
      className="home-cards-link-container"
    >
      <img src={image} alt="" />
      <h3>{title}</h3>
    </Link>
  ));

  return (
    <div className="home-cards-link">
      <h1>Our services</h1>
      <div className="home-cards-link-wrapper">{displayedHomeCards}</div>
    </div>
  );
};
