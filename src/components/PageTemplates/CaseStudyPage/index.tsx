import "./CaseStudyPage.scss";

import { CaseStudy } from "./partials/CaseStudy";
import { FC } from "react";
import { exampleImages } from "data/CaseStudies/ExampleCaseStudies";

export const CaseStudyPage: FC = () => (
  <div className="case-study-page">
    <CaseStudy title="Case Study One" images={exampleImages} />
    <CaseStudy title="Case Study Two" images={exampleImages} />
    <CaseStudy title="Case Study Three" images={exampleImages} />
    <CaseStudy title="Case Study Four" images={exampleImages} />
  </div>
);
