import PlumbingImg from "assets/images/service_images/plumbing.jpg";
import Pluming1Img from "assets/images/service_images/plumbing/plumbing-1.jpg";
import Pluming2Img from "assets/images/service_images/plumbing/plumbing-2.jpg";
import Pluming3Img from "assets/images/service_images/plumbing/plumbing-3.jpg";
import Pluming4Img from "assets/images/service_images/plumbing/plumbing-4.jpg";
import Pluming5Img from "assets/images/service_images/plumbing/plumbing-5.jpg";
import Pluming6Img from "assets/images/service_images/plumbing/plumbing-6.jpg";

export const PlumbingDataList = [
  "Bathrooms",
  "Kitchens",
  "Hot and cold water systems",
  "Leaks",
  "Drainage"
];

export const PlumbingGalleryImages = [
  {
    title: "plumbing-1",
    image: Pluming1Img
  },
  {
    title: "plumbing-2",
    image: Pluming2Img
  },
  {
    title: "plumbing-3",
    image: Pluming3Img
  },
  {
    title: "plumbing-4",
    image: Pluming4Img
  },
  {
    title: "plumbing-5",
    image: Pluming5Img
  },
  {
    title: "plumbing-6",
    image: Pluming6Img
  }
];

export const PlumbingData = {
  title: "Plumbing",
  description:
    "VVS Property Group can help with all installation and maintenance of your plumbing requirements. With a highly trained and skilled team of plumbing and drainage engineers always available, we can offer an efficient service to meet your needs every day of the year. Whether you need assistance with a simple job (like a leaking trap) or a highly complex one (like a complete 1st and 2nd), our specialists pride themselves on quality workmanship tailored to your needs. \r\n With years of experience, we are the number one place to go for all your plumbing and drainage needs. We have worked on a number of both domestic and commercial properties and can help with several plumbing and drainage problems, including leak finding, new fixtures and fittings, new bathrooms / kitchens and alterations.",
  image: PlumbingImg,
  list: PlumbingDataList,
  related: ["Bathrooms", "Kitchens", "Painting and Decorating"],
  galleryImages: PlumbingGalleryImages
};
