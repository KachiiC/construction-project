import "./ServicePage.scss";

import {
  exampleServiceListData,
  testQuestionsData
} from "data/Services/Example";

import { Hero } from "components/PageComponents/PageHero";
import { IServicePage } from "./ServicePage.types";
import { ServicePageAbout } from "./partials/ServicePageAbout";
import { ServicePageGallery } from "./partials/ServicePageGallery";
import { ServicePageList } from "./partials/ServicePageList";
import { ServicePageQuestions } from "./partials/ServicePageQuestions";

export const ServicePage = ({ data, heroTitle, heroImage }: IServicePage) => {
  return (
    <>
      <Hero title={heroTitle} image={heroImage || ""} />
      <ServicePageAbout description="" title="" />
      <ServicePageList serviceList={exampleServiceListData} />
      <ServicePageQuestions questionsData={testQuestionsData} />
      <ServicePageGallery />
    </>
  );
};
