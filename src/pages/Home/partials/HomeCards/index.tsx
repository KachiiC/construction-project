import { FC } from "react";
import { Link } from "react-router-dom";
import { PageSection } from "components/PageComponents/PageSection";
import { ServicesCardsData } from "data/Services/ServiceCardsData";
import { lowerCaseDash } from "utils/routeHelper";

export const HomeCards: FC = () => {
  const displayedHomeCards = ServicesCardsData.map(({ title, image }) => (
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
    <PageSection duration="2500" transition="fade-left">
      <>
        <h1>Our services</h1>
        <div className="home-cards-link-wrapper">{displayedHomeCards}</div>
      </>
    </PageSection>
  );
};
