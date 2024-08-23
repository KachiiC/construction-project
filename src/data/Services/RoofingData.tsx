import Roofing1Img from "assets/images/service_images/roofing/roofing-1.jpg";
import Roofing2Img from "assets/images/service_images/roofing/roofing-2.jpg";
import Roofing3Img from "assets/images/service_images/roofing/roofing-3.jpg";
import Roofing4Img from "assets/images/service_images/roofing/roofing-4.jpg";
import RoofingImg from "assets/images/service_images/roofing.jpg";

export const RoofingDataList = [
  "Leaks",
  "Complete new roofs",
  "Repairs",
  "Lead work",
  "Flat roofs",
  "Liquid systems"
];

export const RoofingGalleryImages = [
  {
    title: "roofing-1",
    image: Roofing1Img
  },
  {
    title: "roofing-2",
    image: Roofing2Img
  },
  {
    title: "roofing-3",
    image: Roofing3Img
  },
  {
    title: "roofing-4",
    image: Roofing4Img
  }
];

export const RoofingData = {
  title: "Roofing",
  description:
    "VVS Property Group can help with all aspects of traditional and modern roofing including new installation and maintenance of both domestic and commercial roofs. Different types of roofing include; traditional pitched clay and slate, traditional felt flat roofing, liquid systems, lead work, gutters and downpipes and all roofing repairs.",
  image: RoofingImg,
  list: RoofingDataList,
  related: ["Building", "Carpentry", "Mechanical"],
  galleryImages: RoofingGalleryImages
};
