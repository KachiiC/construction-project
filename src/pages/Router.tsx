import { PageContainer } from "components/PageContainer";
import { createBrowserRouter } from "react-router-dom";
import { legalRoutes } from "data/LegalData";
import { serviceRoutes } from "data/ServicesData";
import { staticRoutes } from "data/RoutesData";

export const routeValues = [...staticRoutes, ...serviceRoutes, ...legalRoutes];

export const pageRoutes = routeValues.map(({ path, component }) => {
  return {
    path,
    element: <PageContainer>{component}</PageContainer>
  };
});

export const pagesRouter = createBrowserRouter(pageRoutes);
