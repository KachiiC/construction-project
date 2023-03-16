import { ICaseStudy } from "../CaseStudyPage.types";
import { Image } from "antd";
import { PageSection } from "components/PageComponents/PageSection";

export const CaseStudy = ({ title, images, featured, body }: ICaseStudy) => {
  const displayedImages = images.map((img, index) => (
    <div className="site-col-4" key={index}>
      <Image src={img} alt="" />
    </div>
  ));

  return (
    <PageSection
      transition="zoom-in"
      className="case-study-container"
      duration="1500"
    >
      <>
        <div className="case-study-grid">
          <div className="site-grid">
            <div className="site-col-12">
              <Image src={featured} alt="" />
            </div>
            {displayedImages}
          </div>
        </div>
        <div className="case-study-caption">
          <h3>{title}</h3>
          {body}
        </div>
      </>
    </PageSection>
  );
};
