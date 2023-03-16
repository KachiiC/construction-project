import About from "pages/About";
import { CaseStudyPage } from "components/PageTemplates/CaseStudyPage";
import Contact from "pages/Contact";
import Error from "pages/Error";
import Home from "pages/Home";
import { caseStudyList } from "data/CaseStudies/ExampleCaseStudies";

export const routesObj = {
  "/": <Home />,
  about: <About />,
  "case-studies": <CaseStudyPage data={caseStudyList} />,
  contact: <Contact />,
  "*": <Error />
};

export const staticRoutes = Object.entries(routesObj).map((data) => {
  return {
    path: data[0],
    component: data[1]
  };
});
