import "./ServicePage.scss";

import { Hero } from "components/PageComponents/PageHero";
import { IServicePage } from "./ServicePage.types";
import { ServicePageAbout } from "./partials/ServicePageAbout";
import { ServicePageGallery } from "./partials/ServicePageGallery";
import { ServicePageList } from "./partials/ServicePageList";
import { ServicePageQuestions } from "./partials/ServicePageQuestions";
import { ServicePageSidebar } from "./partials/ServicePageSidebar";

export const ServicePage = ({
  title,
  description,
  image,
  questions,
  list,
  related
}: IServicePage) => {
  return (
    <>
      <Hero title={title} image={image || ""} />
      <div className="">
        <div className="service-page">
          <div className="service-page-container">
            <ServicePageAbout description={description} title={title} />
            <ServicePageList serviceList={list} />
            <ServicePageQuestions questionsData={questions} />
            <ServicePageGallery />
          </div>
          <ServicePageSidebar related={related}/>
        </div>
      </div>
    </>
  );
};
