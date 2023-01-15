import Footer from "components/Footer";
import { Navbar } from "components/Navbar";
import { createBrowserRouter } from "react-router-dom";
import { legalRoutes } from "data/LegalData";
import { navbarItems } from "data/NavbarData";
import { serviceRoutes } from "data/ServicesData";
import { staticRoutes } from "data/RoutesData";

export const routeValues = [...staticRoutes, ...serviceRoutes, ...legalRoutes];

export const pageRoutes = routeValues.map(({ path, component }) => {
  return {
    path,
    element: (
      <>
        <main>
          <Navbar data={navbarItems} />
          {component}
          <Footer />
        </main>
      </>
    )
  };
});

export const pagesRouter = createBrowserRouter(pageRoutes);
