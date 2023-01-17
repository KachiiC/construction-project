import BathroomsImg from "../pages/Home/data/images/bathrooms.jpg";
import BuildingImg from "../pages/Home/data/images/building.jpg";
import CarpentryImg from "../pages/Home/data/images/carpentry.jpg";
import ElectricsImg from "../pages/Home/data/images/electrics.jpg";
import KitchensImg from "../pages/Home/data/images/kitchen.jpg";
import MechanicalImg from "../pages/Home/data/images/mechanical.jpg";
import PaintingImg from "../pages/Home/data/images/painting.jpg";
import PlumbingImg from "../pages/Home/data/images/plumbing.jpg";
import RoofingImg from "../pages/Home/data/images/roofing.jpg";
import { ServicePage } from "components/ServicePage";
import { lowerCaseDash } from "utils/routeHelper";

export const serviceList = {
  Building: <ServicePage heroTitle="Building" heroImage={BuildingImg} />,
  Kitchens: <ServicePage heroTitle="Kitchens" heroImage={KitchensImg} />,
  Bathrooms: <ServicePage heroTitle="Bathrooms" heroImage={BathroomsImg} />,
  Plumbing: <ServicePage heroTitle="Plumbing" heroImage={PlumbingImg} />,
  Electrics: <ServicePage heroTitle="Electrics" heroImage={ElectricsImg} />,
  Mechanical: <ServicePage heroTitle="Mechanical" heroImage={MechanicalImg} />,
  Carpentry: <ServicePage heroTitle="Carpentry" heroImage={CarpentryImg} />,
  Roofing: <ServicePage heroTitle="Roofing" heroImage={RoofingImg} />,
  "Painting and decorating": <ServicePage heroTitle="Painting" heroImage={PaintingImg} />
};

export const servicesData = Object.entries(serviceList).map((data) => {
  return {
    key: lowerCaseDash(data[0]),
    component: data[1]
  };
});

export const serviceRoutes = servicesData.map(({ key, component }) => {
  return {
    path: key,
    component
  };
});
