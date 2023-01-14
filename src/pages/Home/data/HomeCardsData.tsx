import BuildingImg from "./images/building.jpg";
import CarpentryImg from "./images/carpentry.jpg";
import DrainsImg from "./images/drains.jpg";
import ElectricsImg from "./images/electrics.jpg";
import HeatingImg from "./images/heating.jpg";
import { IHomeServiceCards } from "../partials/HomeCards/HomeCards.types";
import KitchenImg from "./images/kitchen.jpg";
import LocksImg from "./images/locks.jpg";
import PlumbingImg from "./images/plumbing.jpg";
import RoofingImg from "./images/roofing.jpg";

export const HomeServicesData: IHomeServiceCards[] = [
  {
    title: "Plumbing",
    image: PlumbingImg
  },
  {
    title: "Heating",
    image: CarpentryImg
  },
  {
    title: "Electrics",
    image: DrainsImg
  },
  {
    title: "Drains",
    image: ElectricsImg
  },
  {
    title: "Carpentry",
    image: HeatingImg
  },
  {
    title: "Locks",
    image: LocksImg
  },
  {
    title: "Building",
    image: BuildingImg
  },
  {
    title: "Roofing",
    image: RoofingImg
  },
  {
    title: "Kitchen",
    image: KitchenImg
  }
];
