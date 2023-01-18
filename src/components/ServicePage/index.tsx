import "./ServicePage.scss";

import { ServicePageAbout } from "./partials/ServicePageAbout";
import { ServicePageGallery } from "./partials/ServicePageGallery";
import { ServicePageHero } from "./partials/ServicePageHero";
import { ServicePageList } from "./partials/ServicePageList";
import { ServicePageQuestions } from "./partials/ServicePageQuestions";

interface IServicePage {
  data?: any;
  heroTitle?: string;
  heroImage?: string;
}

export const ServicePage = ({ data, heroTitle, heroImage }: IServicePage) => {
  return (
    <>
      <ServicePageHero image={heroImage || ""} title={heroTitle || ""} />
      <ServicePageAbout />
      <ServicePageList />
      <ServicePageQuestions />
      <ServicePageGallery />
    </>
  );
};
