import "./CaseStudyPage.scss";

import { CaseStudy } from "./partials/CaseStudy";

export const CaseStudyPage = () => {
  return (
    <div className="case-study-page">
      <CaseStudy title="Case Study One" />
      <CaseStudy title="Case Study Two" />
      <CaseStudy title="Case Study Three" />
      <CaseStudy title="Case Study Four" />
    </div>
  );
};
