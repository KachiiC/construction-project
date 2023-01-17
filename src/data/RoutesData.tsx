import About from "pages/About";
import Contact from "pages/Contact";
import Error from "pages/Error";
import Home from "pages/Home";

export const routesObj = {
  "/": <Home />,
  about: <About />,
  "commercial-case-studies": <h1>Commercial Case Studies</h1>,
  "domestic-case-studies": <h1>Domestic Case Studies</h1>,
  contact: <Contact />,
  "*": <Error />
};

export const staticRoutes = Object.entries(routesObj).map((data) => {
  return {
    path: data[0],
    component: data[1]
  };
});
