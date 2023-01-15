import { lowerCaseDash } from "utils/routeHelper";

export const legalList = {
  Careers: <h1>Careers</h1>,
  "Terms and Conditions": <h1>Terms & Conditions</h1>,
  "Terms of Use": <h1>Website Terms of Use</h1>,
  "Privacy Policy": <h1>Privacy Policy</h1>,
  "Cookie Policy": <h1>Cookie Policy</h1>
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
