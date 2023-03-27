import "./ServicePage.scss";

import { Hero } from "components/PageComponents/PageHero";
import { IServicePage } from "./ServicePage.types";
import { ServicePageAbout } from "./partials/ServicePageAbout";
import { ServicePageGallery } from "./partials/ServicePageGallery";
import { ServicePageList } from "./partials/ServicePageList";
import { ServicePageSidebar } from "./partials/ServicePageSidebar";

export const ServicePage = ({
  title,
  description,
  image,
  list,
  galleryImages,
  related
}: IServicePage) => {
  return (
    <>
      <Hero title={title} image={image || ""} />
      <div className="service-page">
        <div className="service-page-container">
          <ServicePageAbout description={description} title={title} />
          <ServicePageList serviceList={list} />
          <ServicePageGallery images={galleryImages}/>
        </div>
        <ServicePageSidebar related={related} />
      </div>
    </>
  );
};
