import BathroomsImg from "pages/Home/data/images/bathrooms.jpg";
import BuildingImg from "pages/Home/data/images/building.jpg";
import CarpentryImg from "pages/Home/data/images/carpentry.jpg";
import ElectricsImg from "pages/Home/data/images/electrics.jpg";
import { FC } from "react";
import { Image } from "antd";
import KitchensImg from "pages/Home/data/images/kitchen.jpg";

export const ServicePageGallery: FC = () => {
  return (
    <div>
      <h3>Our Work</h3>
      <div className="service-page-gallery">
        <div className="service-page-gallery-image">
          <Image src={BathroomsImg} />
        </div>
        <div className="service-page-gallery-image">
          <Image src={BuildingImg} />
        </div>
        <div className="service-page-gallery-image">
          <Image src={CarpentryImg} />
        </div>
        <div className="service-page-gallery-image">
          <Image src={ElectricsImg} />
        </div>
        <div className="service-page-gallery-image">
          <Image src={KitchensImg} />
        </div>
      </div>
    </div>
  );
};
