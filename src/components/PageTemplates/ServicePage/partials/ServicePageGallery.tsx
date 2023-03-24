import { FC } from "react";
import { PageSection } from "components/PageComponents/PageSection";
import { ServicesCardsData } from "data/Services/ServiceCardsData";
import { SiteCarousel } from "components/SiteComponents/SiteCarousel";

export const ServicePageGallery: FC = () => (
  <PageSection
    transition="fade-left"
    duration="4000"
    margin="auto"
    padding="10px"
    className="service-page-slider"
  >
    <SiteCarousel
      title="Our Work"
      images={ServicesCardsData}
      maxHeight={"200"}
      height="100%"
      width="100%"
    />
  </PageSection>
);
