import { BathroomsData } from "data/Services/BathroomsData";
import { BuildingData } from "data/Services/BuildingData";
import { CarpentryData } from "data/Services/CarpentryData";
import { ElectricalData } from "data/Services/ElectricalData";
import { KitchensData } from "data/Services/KitchensData";
import { MechanicalData } from "data/Services/MechanicalData";
import { PaintingData } from "data/Services/PaintingData";
import { PlumbingData } from "data/Services/PlumbingData";
import { RoofingData } from "data/Services/RoofingData";
import { ServicePage } from "components/PageTemplates/ServicePage";
import { lowerCaseDash } from "utils/routeHelper";

export const serviceListData = {
  Bathrooms: <ServicePage {...BathroomsData} />,
  Building: <ServicePage {...BuildingData} />,
  Carpentry: <ServicePage {...CarpentryData} />,
  Electrical: <ServicePage {...ElectricalData} />,
  Kitchens: <ServicePage {...KitchensData} />,
  Mechanical: <ServicePage {...MechanicalData} />,
  "Painting and Decorating": <ServicePage {...PaintingData} />,
  Plumbing: <ServicePage {...PlumbingData} />,
  Roofing: <ServicePage {...RoofingData} />
};

export const serviceRoutes = Object.entries(serviceListData).map((data) => {
  return {
    path: lowerCaseDash(data[0]),
    component: data[1]
  };
});
