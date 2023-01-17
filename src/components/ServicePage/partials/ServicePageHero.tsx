import { Link } from "react-router-dom";
import { StyledServicePageHero } from "../ServicePage.styles";

export const ServicePageHero = ({
  image,
  title
}: {
  image: string;
  title: string;
}) => {
  return (
    <StyledServicePageHero image={image}>
      <div className="service-page-hero-header">
        <h1 className="service-page-hero-title">{title}</h1>
      </div>
      <div className="service-page-hero-footer">
        <Link to="/contact" className="button button-primary">
          Learn More
        </Link>
        <Link className="button" to="/contact" target="_blank" rel="noreferrer">
          Get Quote
        </Link>
      </div>
    </StyledServicePageHero>
  );
};
