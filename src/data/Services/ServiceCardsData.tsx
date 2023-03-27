import BathroomImg from "assets/images/service_images/bathrooms.jpg";
import BuildingImg from "assets/images/service_images/building.jpg";
import CarpentryImg from "assets/images/service_images/carpentry.jpg";
import ElectricsImg from "assets/images/service_images/electrical.jpg";
import KitchenImg from "assets/images/service_images/kitchen.jpg";
import MechanicalImg from "assets/images/service_images/mechanical.jpg";
import PaintingImg from "assets/images/service_images/painting.jpg";
import PlumbingImg from "assets/images/service_images/plumbing.jpg";
import RoofingImg from "assets/images/service_images/roofing.jpg";

export interface IServicesCardsData {
  title: string;
  image: string;
}

export const ServicesCardsData: IServicesCardsData[] = [
  {
    title: "Building",
    image: BuildingImg
  },
  {
    title: "Kitchens",
    image: KitchenImg
  },
  {
    title: "Bathrooms",
    image: BathroomImg
  },
  {
    title: "Plumbing",
    image: PlumbingImg
  },
  {
    title: "Electrics",
    image: ElectricsImg
  },
  {
    title: "Mechanical",
    image: MechanicalImg
  },
  {
    title: "Carpentry",
    image: CarpentryImg
  },
  {
    title: "Roofing",
    image: RoofingImg
  },
  {
    title: "Painting and Decorating",
    image: PaintingImg
  }
];
