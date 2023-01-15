import AOS from "aos";
import { RouterProvider } from "react-router-dom";
import { pagesRouter } from "./pages/Router";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <RouterProvider router={pagesRouter} />;
};

export default App;
