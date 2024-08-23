import Painting1Img from "assets/images/service_images/painting/painting-1.jpg";
import Painting2Img from "assets/images/service_images/painting/painting-2.jpg";
import Painting3Img from "assets/images/service_images/painting/painting-3.jpg";
import Painting4Img from "assets/images/service_images/painting/painting-4.jpg";
import Painting5Img from "assets/images/service_images/painting/painting-5.jpg";
import Painting6Img from "assets/images/service_images/painting/painting-6.jpg";
import Painting7Img from "assets/images/service_images/painting/painting-7.jpg";
import PaintingImg from "assets/images/service_images/painting.jpg";

export const PaintingDataList = [
  "Complete refurbs",
  "Wallpapering",
  "Room Painting"
];

export const PaintingGalleryImages = [
  {
    title: "painting-1",
    image: Painting1Img
  },
  {
    title: "painting-2",
    image: Painting2Img
  },
  {
    title: "painting-3",
    image: Painting3Img
  },
  {
    title: "painting-4",
    image: Painting4Img
  },
  {
    title: "painting-5",
    image: Painting5Img
  },
  {
    title: "painting-6",
    image: Painting6Img
  },
  {
    title: "painting-7",
    image: Painting7Img
  },
];

export const PaintingData = {
  title: "Painting and Decorating",
  description:
    "VVS Property Group pride themselves as one of London and the South East's top painting and decorating companies. Having carried out various projects both domestic and commercial we can cater for all of your needs.",
  image: PaintingImg,
  list: PaintingDataList,
  related: ["Carpentry", "Roofing", "Building"],
  galleryImages: PaintingGalleryImages
};
