import { FooterIconsList, legalLinks, servicesLink } from "./FooterLinks";

import { FC } from "react";

const displayedLinks = [
  {
    section: "Our Services",
    links: servicesLink
  },
  {
    section: "Legal & More",
    links: legalLinks
  }
];

export const FooterLinks: FC = () => {
  const linksList = displayedLinks.map(({ section, links }) => {
    const sectionLinks = links.map(({ title, link }) => (
      <div className="service-links-handle" key={title}>
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
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
