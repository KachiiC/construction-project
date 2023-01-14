import { FC } from "react";
import { HomeServicesData } from "../../data/HomeCardsData";

export const HomeCards: FC = () => {
  const displayedHomeCards = HomeServicesData.map(({ title, image }) => (
    <div className="home-cards-link-container" key={title}>
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  ));

  return (
    <div className="home-cards-link">
      <h1>Our services</h1>
      <div className="home-cards-link-wrapper">{displayedHomeCards}</div>
    </div>
  );
};
