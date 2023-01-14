import About from "./About";
import Error from "./Error";
import Home from "./Home";
import { createBrowserRouter } from "react-router-dom";

export const pageRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "*",
    element: <Error />
  }
];

export const pagesRouter = createBrowserRouter(pageRoutes);
