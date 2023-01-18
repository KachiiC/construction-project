import About from "pages/About";
import { CaseStudyPage } from "components/CaseStudyPage";
import Contact from "pages/Contact";
import Error from "pages/Error";
import Home from "pages/Home";

export const routesObj = {
  "/": <Home />,
  about: <About />,
  "commercial-case-studies": <CaseStudyPage />,
  "domestic-case-studies": <CaseStudyPage />,
  contact: <Contact />,
  "*": <Error />
};

export const staticRoutes = Object.entries(routesObj).map((data) => {
  return {
    path: data[0],
    component: data[1]
  };
});
