import { Terms } from "pages/Terms";
import { lowerCaseDash } from "utils/routeHelper";

export const legalList = {
  "Terms and Conditions": <Terms />
};

export const legalData = Object.entries(legalList).map((data) => {
  return {
    key: lowerCaseDash(data[0]),
    component: data[1]
  };
});

export const legalRoutes = Object.entries(legalList).map((data) => {
  return {
    path: lowerCaseDash(data[0]),
    component: data[1]
  };
});
