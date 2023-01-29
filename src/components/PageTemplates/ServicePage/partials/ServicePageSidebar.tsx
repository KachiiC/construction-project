import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined
} from "@ant-design/icons";

import { ServicesCardsData } from "data/Services/ServiceCardsData";

export const ServicePageSidebar = () => {
  
    const sidebarServiceCards = ServicesCardsData.map(({ image, title }) => {
    return (
      <div className="sidebar-service-container">
        <img
          src={image}
          title={title}
          className="sidebar-service-card"
          alt={title}
        />
        <h3>{title}</h3>
      </div>
    );
  });

  return (
    <div className="service-page-navbar">
        <h3>Related services</h3>
      {sidebarServiceCards}
      <div>Contact Us Now</div>
      <LinkedinOutlined
        color="#003366"
        style={{ fontSize: "30px", padding: "5px" }}
      />
      <FacebookOutlined
        color="#003366"
        style={{ fontSize: "30px", padding: "5px" }}
      />
      <TwitterOutlined
        color="#003366"
        style={{ fontSize: "30px", padding: "5px" }}
      />
      <YoutubeOutlined
        color="#003366"
        style={{ fontSize: "30px", padding: "5px" }}
      />
    </div>
  );
};
