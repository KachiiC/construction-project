import "./ServicePage.scss";

import { Hero } from "components/Hero";
import { ServicePageAbout } from "./partials/ServicePageAbout";
import { ServicePageGallery } from "./partials/ServicePageGallery";
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
      <Hero title={heroTitle} image={heroImage || ''}/>
      <ServicePageAbout />
      <ServicePageList />
      <ServicePageQuestions />
      <ServicePageGallery />
    </>
  );
};
