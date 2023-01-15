import { lowerCaseDash } from "utils/routeHelper";

export const serviceList = {
  Building: <h1>Building</h1>,
  Kitchens: <h1>Kitchens</h1>,
  Bathrooms: <h1>Bathrooms</h1>,
  Plumbing: <h1>Plumbing</h1>,
  Electrics: <h1>Electrics</h1>,
  Mechanical: <h1>Mechanical</h1>,
  Carpentry: <h1>Carpentry</h1>,
  Roofing: <h1>Roofing</h1>,
  "Painting and decorating": <h1>Painting and decorating</h1>
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
