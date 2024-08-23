import FeaturedImg from "../../assets/images/case_study_images/case_study_two/essex-1.jpg";
import ImgOne from "../../assets/images/case_study_images/case_study_two/essex-4.jpg";
import ImgThree from "../../assets/images/case_study_images/case_study_two/essex-3.jpg";
import ImgTwo from "../../assets/images/case_study_images/case_study_two/essex-2.jpg";

const caseStudyTwoImages = [ImgOne, ImgTwo, ImgThree];

const caseStudyTwoBody = (
  <div>
    <p>
      Our client wanted to update a domestic building ready to put on
      the market. The brief was to update and refresh the space while making it
      more practical, creating a home for the rental market.
    </p>
    <h4>Solution</h4>
    <p>
      The spaces were completely stripped back to the shell and all walls
      re-plastered. Both bathrooms and kitchen were refurbished including the
      outside area being made maintenance free with an astroturf.
    </p>
    <h4>Results</h4>
    <p>
      The property was snapped up within weeks of being on the market and the
      client had income immediately on their investment.
    </p>
  </div>
);

export const caseStudyTwo = {
  title: "Essex domestic refurbishment",
  images: caseStudyTwoImages,
  featured: FeaturedImg,
  body: caseStudyTwoBody
};
