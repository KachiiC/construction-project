import FeaturedImg from "../../assets/images/case_study_images/case_study_one/brighton-1.jpg";
import ImgOne from "../../assets/images/case_study_images/case_study_one/brighton-4.jpg";
import ImgThree from "../../assets/images/case_study_images/case_study_one/brighton-3.jpg";
import ImgTwo from "../../assets/images/case_study_images/case_study_one/brighton-2.jpg";

const caseStudyOneImages = [ImgOne, ImgTwo, ImgThree];

const caseStudyOneBody = (
  <div>
    <p>
      Our client wanted to create new unisex cubicles for both showers and
      toilets within an office block in Brighton. The existing was very dated
      and required major works to completely change the layout and create new
      versatile spaces.
    </p>
    <h4>Solution</h4>
    <p>
      This was a complex project as the works were carried out in a live
      environment across two floors. The spaces were completely stripped back to
      a concrete shell and new cubicles formed with a completely new plumbing
      and ventilation system incorporating the regulatory 10 air changes per
      minute.
    </p>
    <h4>Results</h4>
    <p>
      Happy clients with their new unisex versatile toilet and wash spaces.
      encompassing new wiring, plumbing and ventilation system throughout.
    </p>
  </div>
);

export const caseStudyOne = {
  title: "Brighton Superloo Refurbishment",
  images: caseStudyOneImages,
  featured: FeaturedImg,
  body: caseStudyOneBody
};
