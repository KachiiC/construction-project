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
    <h3>Contact Us</h3>
    <div className="footer-contact-frame">
      <a href="mailto:kach93@gmail.com">
        <button className="custom-btn btn-12">
          <span>Business@gmail.com</span>
          <span>Email US</span>
        </button>
      </a>
    </div>
    <div className="footer-contact-frame">
      <a href="tel:+447519547007">
        <button className="custom-btn btn-12">
          <span>+44123456789</span>
          <span>Read More</span>
        </button>
      </a>
    </div>
    <FooterIcons />
  </div>
);
