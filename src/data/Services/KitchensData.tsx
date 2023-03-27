import Kitchen1Img from "assets/images/service_images/kitchen/kitchen-1.jpg";
import Kitchen2Img from "assets/images/service_images/kitchen/kitchen-2.jpg";
import Kitchen3Img from "assets/images/service_images/kitchen/kitchen-3.jpg";
import KitchenImg from "assets/images/service_images/kitchen.jpg";

export const KitchensDataList = [
  "Complete refurbs",
  "Tiling",
  "Plumbing",
  "Joinery"
];

export const KitchenGalleryImages = [
  {
    title: "kitchen-1",
    image: Kitchen1Img
  },
  {
    title: "kitchen-2",
    image: Kitchen2Img
  },
  {
    title: "kitchen-3",
    image: Kitchen3Img
  }
]

export const KitchensData = {
  title: "Kitchens",
  description:
    "At VVS Property Group we can provide a full kitchen fit out service with our team of accredited plumbers and electricians, expert tilers, decorators and finishing tradesmen. We make sure all our kitchen installations are fitted to a high standard and have a portfolio of completed kitchens to share with you, from both residential home to kitchens in commercial spaces.",
  image: KitchenImg,
  list: KitchensDataList,
  related: ["Bathrooms", "Electrics", "Carpentry"],
  galleryImages: KitchenGalleryImages
};
