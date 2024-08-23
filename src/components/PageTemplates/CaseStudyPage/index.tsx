import "./CaseStudyPage.scss";
import { CaseStudy } from "./partials/CaseStudy";
import { ICaseStudyPage } from "./CaseStudyPage.types";

export const CaseStudyPage = ({ data }: ICaseStudyPage) => {
  const displayedCases = data.map((caseStudy, index) => (
    <CaseStudy key={index} {...caseStudy} />
  ));

  return <div className="case-study-page">{displayedCases}</div>;
};
