import { PageContainer } from "components/PageComponents/PageContainer";
import { createBrowserRouter } from "react-router-dom";
import { legalRoutes } from "data/LegalData";
import { serviceRoutes } from "routes/ServicesRoutesData";
import { staticRoutes } from "routes/RoutesData";

export const routeValues = [...staticRoutes, ...serviceRoutes, ...legalRoutes];

export const pageRoutes = routeValues.map(({ path, component }) => {
  return {
    path,
    element: <PageContainer>{component}</PageContainer>
  };
});

export const pagesRouter = createBrowserRouter(pageRoutes);
