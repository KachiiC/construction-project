import BathroomImg from "assets/images/service_images/bathrooms.jpg";

export const BathroomDataList = [
  "Complete refurbs",
  "Plumbing",
  "Tiling",
];

export const BathroomQuestionsData = [
  {
    title: "Can you help design my bathroom?",
    content:
      "Yes, our team of expert bathrooms fitters are happy to help plan and advise you on your bathroom(s)."
  },
  {
    title: "How quick is a new bathroom installation?",
    content:
      "This depends on the size of the bathroom and it's design. It's best to book and estimation with our team."
  },
  {
    title: "Can you install underfloor heating in my bathroom?",
    content:
      "Yes, we can install underflooring heating when installing your new bathroom."
  }
];

export const BathroomsData = {
  title: "Bathrooms",
  description:
    "At VVS Property Group we can provide a full bathroom fit out service with our team of accredited plumbers and electricians, expert tilers, decorators and finishing tradesmen. We make sure all our bathroom installations are fitted to a high standard and have a portfolio of completed bathrooms to share with you, from both residential home to bathrooms in commercial spaces.",
  image: BathroomImg,
  list: BathroomDataList,
  questions: BathroomQuestionsData,
  related: ["Carpentry", "Roofing", "Painting and Decorating"]
};
