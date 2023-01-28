import "./CaseStudyPage.scss";

import {
  exampleFeaturedImage,
  exampleImages
} from "data/CaseStudies/ExampleCaseStudies";

import { CaseStudy } from "./partials/CaseStudy";
import { FC } from "react";

export const CaseStudyPage: FC = () => (
  <div className="case-study-page">
    <CaseStudy
      title="Case Study One"
      images={exampleImages}
      featured={exampleFeaturedImage}
    />
    <CaseStudy
      title="Case Study Two"
      images={exampleImages}
      featured={exampleFeaturedImage}
    />
    <CaseStudy
      title="Case Study Three"
      images={exampleImages}
      featured={exampleFeaturedImage}
    />
    <CaseStudy
      title="Case Study Four"
      images={exampleImages}
      featured={exampleFeaturedImage}
    />
  </div>
);
