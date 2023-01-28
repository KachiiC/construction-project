import BathroomsImg from "assets/images/service_images/bathrooms.jpg";
import BuildingImg from "assets/images/service_images/building.jpg";
import CarpentryImg from "assets/images/service_images/carpentry.jpg";
import ElectricsImg from "assets/images/service_images/electrics.jpg";
import KitchensImg from "assets/images/service_images/kitchen.jpg";
import MechanicalImg from "assets/images/service_images/mechanical.jpg";
import PaintingImg from "assets/images/service_images/painting.jpg";
import PlumbingImg from "assets/images/service_images/plumbing.jpg";
import RoofingImg from "assets/images/service_images/roofing.jpg";
import { ServicePage } from "components/PageTemplates/ServicePage";
import { lowerCaseDash } from "utils/routeHelper";

export const serviceListData = {
  Building: <ServicePage heroTitle="Building" heroImage={BuildingImg} />,
  Kitchens: <ServicePage heroTitle="Kitchens" heroImage={KitchensImg} />,
  Bathrooms: <ServicePage heroTitle="Bathrooms" heroImage={BathroomsImg} />,
  Plumbing: <ServicePage heroTitle="Plumbing" heroImage={PlumbingImg} />,
  Electrics: <ServicePage heroTitle="Electrics" heroImage={ElectricsImg} />,
  Mechanical: <ServicePage heroTitle="Mechanical" heroImage={MechanicalImg} />,
  Carpentry: <ServicePage heroTitle="Carpentry" heroImage={CarpentryImg} />,
  Roofing: <ServicePage heroTitle="Roofing" heroImage={RoofingImg} />,
  "Painting and decorating": (
    <ServicePage heroTitle="Painting" heroImage={PaintingImg} />
  )
};

export const serviceRoutes = Object.entries(serviceListData).map((data) => {
  return {
    path: lowerCaseDash(data[0]),
    component: data[1]
  };
});
