import Mechanical1Img from "assets/images/service_images/mechanical/mechanical-1.jpg";
import Mechanical2Img from "assets/images/service_images/mechanical/mechanical-2.jpg";
import Mechanical3Img from "assets/images/service_images/mechanical/mechanical-3.jpg";
import Mechanical4Img from "assets/images/service_images/mechanical/mechanical-4.jpg";
import Mechanical5Img from "assets/images/service_images/mechanical/mechanical-5.jpg";
import MechanicalImg from "assets/images/service_images/mechanical.jpg";

export const exampleServiceListData = [
  "Heating Installation",
  "Ventilation Installation",
  "Air Con installation",
  "HVAC"
];

export const MechanicalGalleryImages = [
  {
    title: "mechanical-1",
    image: Mechanical1Img
  },
  {
    title: "mechanical-2",
    image: Mechanical2Img
  },
  {
    title: "mechanical-3",
    image: Mechanical3Img
  },
  {
    title: "mechanical-4",
    image: Mechanical4Img
  },
  {
    title: "mechanical-5",
    image: Mechanical5Img
  }
];

export const MechanicalData = {
  title: "Mechanical",
  description:
    "VVS Property Group can help with All installation and maintenance of your Mechanical requirements. With a highly trained and skilled team of Mechanical engineers always available, we can offer an efficient service to meet your needs every day of the year. Whether you need assistance with a simple job (like carrying out maintenance on your HVAC systems) or a highly complex one (like a complete Air conditioning renewal), our mechanical specialists pride themselves on quality workmanship tailored to your needs.",
  image: MechanicalImg,
  list: exampleServiceListData,
  related: ["Electrics", "Kitchens", "Bathrooms"],
  galleryImages: MechanicalGalleryImages
};
