import BathroomsImg from "assets/images/service_images/bathrooms.jpg";
import BuildingImg from "assets/images/service_images/building.jpg";
import CarpentryImg from "assets/images/service_images/carpentry.jpg";
import ElectricsImg from "assets/images/service_images/electrics.jpg";
import { FC } from "react";
import { Image } from "antd";
import KitchensImg from "assets/images/service_images/kitchen.jpg";
import { PageSection } from "components/PageComponents/PageSection";

export const ServicePageGallery: FC = () => {
  return (
    <PageSection transition="fade-left" duration="4000" margin="80px 0px">
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
    </PageSection>
  );
};
