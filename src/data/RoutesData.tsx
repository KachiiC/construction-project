import About from "pages/About";
import Error from "pages/Error";
import Home from "pages/Home";

export const routesObj = {
  "/": <Home />,
  about: <About />,
  "commercial-case-studies": <h1>Commercial Case Studies</h1>,
  "domestic-case-studies": <h1>Domestic Case Studies</h1>,
  contact: <h1>Contact</h1>,
  "*": <Error />
};

export const staticRoutes = Object.entries(routesObj).map((data) => {
  return {
    path: data[0],
    component: data[1]
  };
});
