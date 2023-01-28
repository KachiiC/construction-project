import "./SiteCardText.scss";

import { ISiteCardText } from "./SiteCardText.types";
import { Link } from "react-router-dom";

export const SiteCardText = ({
  heading,
  text,
  buttonText,
  buttonLink,
  image
}: ISiteCardText) => {
  return (
    <div className="home-about-container">
      <div className="home-about-image">
        <img src={image} alt="" />
      </div>
      <div className="home-about-caption">
        <h2>{heading}</h2>
        <p>{text}</p>
        <Link to={buttonLink}>
          <button>{buttonText}</button>
        </Link>
      </div>
    </div>
  );
};
