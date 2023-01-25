import { FooterIconsList, displayedLinks } from "./FooterLinks";

import { FC } from "react";
import { Link } from "react-router-dom";
import { lowerCaseDash } from "utils/routeHelper";

export const FooterLinks: FC = () => {
  const linksList = displayedLinks.map(({ section, links }) => {
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

export const FooterIcons: FC = () => {
  return (
    <div className="footer-icons">
      {FooterIconsList("50px", "white").map(({ icon, link }) => {
        return (
          <div className="footer-icons-link" key={link}>
            <a href={link}>{icon}</a>
          </div>
        );
      })}
    </div>
  );
};

export const FooterButtons: FC = () => (
  <div className="footer-contact-container site-col-4">
    <div className="footer-contact-btn">
      <span>
        <a href="mailto: abc@example.com">Email</a>
      </span>
    </div>
    <FooterIcons />
  </div>
);
