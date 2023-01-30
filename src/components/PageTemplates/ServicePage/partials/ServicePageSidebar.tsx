import { FC } from "react";
import { IServicePageSidebar } from "../ServicePage.types";
import { ServicesCardsData } from "data/Services/ServiceCardsData";
import { SocialMediaIconsList } from "data/SocialMediaLinks";

const SideBarIcons: FC = () => {
  const iconsList = SocialMediaIconsList("30px", "#003366");

  const displayedIcons = iconsList.map(({ icon, link }) => (
    <a href={link} target="_blank" rel="noreferrer">
      {icon}
    </a>
  ));

  return (
    <div className="service-page-navbar-contact">
      <h2>Contact Us Now</h2>
      <div className="service-page-navbar-contact-icons">{displayedIcons}</div>
      <div className="service-page-navbar-contact-btn">
        <a href="mailto:abc@example.com">Email Us Now</a>
        <a href="tel:+447519547007">Phone Us Now</a>
      </div>
    </div>
  );
};

export const ServicePageSidebar = ({ related }: IServicePageSidebar) => {
  const sidebarServiceCards = related.map((relate) => {
    const relateImg = ServicesCardsData.find(
      ({ title }) => title === relate
    )?.image;

    return (
      <div className="service-page-navbar-card-container">
        <img
          src={relateImg}
          title={relate}
          className="service-page-navbar-card-image"
          alt={relate}
        />
        <h3>{relate}</h3>
      </div>
    );
  });

  const SideBarCards: FC = () => {
    return (
      <div>
        <h2>Related services</h2>
        <div className="service-page-navbar-links">{sidebarServiceCards}</div>
      </div>
    );
  };

  return (
    <div className="service-page-navbar">
      <SideBarIcons />
      <SideBarCards />
    </div>
  );
};
