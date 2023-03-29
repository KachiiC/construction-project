import Kitchen1Img from "assets/images/service_images/kitchen/kitchen-1.jpg";
import Kitchen2Img from "assets/images/service_images/kitchen/kitchen-2.jpg";
import Kitchen3Img from "assets/images/service_images/kitchen/kitchen-3.jpg";
import Kitchen4Img from "assets/images/service_images/kitchen/kitchen-4.jpg";
import Kitchen5Img from "assets/images/service_images/kitchen/kitchen-5.jpg";
import Kitchen6Img from "assets/images/service_images/kitchen/kitchen-6.jpg";
import Kitchen7Img from "assets/images/service_images/kitchen/kitchen-7.jpg";
import Kitchen8Img from "assets/images/service_images/kitchen/kitchen-8.jpg";
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
  },
  {
    title: "kitchen-4",
    image: Kitchen4Img
  },
  {
    title: "kitchen-5",
    image: Kitchen5Img
  },
  {
    title: "kitchen-6",
    image: Kitchen6Img
  },
  {
    title: "kitchen-7",
    image: Kitchen7Img
  },
  {
    title: "kitchen-8",
    image: Kitchen8Img
  },
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
