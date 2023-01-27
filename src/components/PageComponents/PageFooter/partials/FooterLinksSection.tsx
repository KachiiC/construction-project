import { IFooterLinksSection } from "../Footer.types";
import { Link } from "react-router-dom";
import { lowerCaseDash } from "utils/routeHelper";

export const FooterLinksSection = ({ data }: IFooterLinksSection) => {
  const linksList = data.map(({ section, links }) => {
    const sectionLinks = links.map((link) => (
      <div className="service-links-handle" key={link}>
        <Link to={`/${lowerCaseDash(link)}`}>{link}</Link>
      </div>
    ));

    return (
      <div className="service-links-container site-col-4" key={section}>
        <h3>{section}</h3>
        {sectionLinks}
      </div>
    );
  });

  return <>{linksList}</>;
};
