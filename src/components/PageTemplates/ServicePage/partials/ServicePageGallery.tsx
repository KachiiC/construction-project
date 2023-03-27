import {
  IServicesCardsData,
  ServicesCardsData
} from "data/Services/ServiceCardsData";

import { PageSection } from "components/PageComponents/PageSection";
import { SiteCarousel } from "components/SiteComponents/SiteCarousel";

interface IServicePageGallery {
  images?: IServicesCardsData[];
}

export const ServicePageGallery = ({ images }: IServicePageGallery) => (
  <PageSection
    transition="fade-left"
    duration="4000"
    margin="auto"
    padding="10px"
    className="service-page-slider"
  >
    <SiteCarousel
      title="Our Work"
      images={images || ServicesCardsData}
      maxHeight={"200"}
      height="100%"
      width="100%"
    />
  </PageSection>
);
