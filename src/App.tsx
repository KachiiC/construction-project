import AOS from "aos";
import { RouterProvider } from "react-router-dom";
import { pagesRouter } from "./pages/routes";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <RouterProvider router={pagesRouter} />
    </main>
  );
};

export default App;
