import KitchenImg from "assets/images/service_images/kitchen.jpg";

export const KitchensDataList = [
  "Plumbing",
  "Tiling & grouting",
  "Electrics",
  "Gas​",
  "Refacing current cabinets & cupboards",
  "Fitting of Kitchen Worktops",
  "Cut out and Fit of Sink and Hob",
  "Removal of Previous Kitchen",
  "Appliance installation",
  "Painting & decorating",
  "Assembling and hanging cupboards",
  "Assembling and mounting cabinets",
  "Bespoke Kitchen Design"
];

export const KitchensQuestionsData = [
  {
    title: "How long does it take to fit a new kitchen?",
    content:
      "For a full kitchen fitting you can estimate a 2 - 6 week time frame. This would of course depend on the different services your require from us (electrics, plumbing etc) and the size of property.  It's best to book an estimation with us, so that we can go through the different services we offer and provide an accurate timeframe."
  },
  {
    title: "Can you help design my kitchen?",
    content:
      "Yes, the Philby's kitchen fitting team can plan and computer design your kitchen with your free quotation to give you a good idea what your dream kitchen will look like. "
  },
  {
    title: "Do I have to get new appliances for a new kitchen?",
    content:
      "If your current appliances are looking worn out and over 6.5 years old, it maybe worth replacing them while getting the kitchen fitted."
  }
];

export const KitchensData = {
  title: "Kitchens",
  description:
    "At VVS Property Group we can provide a full kitchen fit out service with our team of accredited plumbers and electricians, expert tilers, decorators and finishing tradesmen. We make sure all our kitchen installations are fitted to a high standard and have a portfolio of completed kitchens to share with you, from both residential home to kitchens in commercial spaces.",
  image: KitchenImg,
  list: KitchensDataList,
  questions: KitchensQuestionsData,
  related: ["Plumbing", "Bathrooms", "Carpentry"]
};
