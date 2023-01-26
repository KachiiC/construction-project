import { FC, useEffect } from "react";

import AOS from "aos";
import { RouterProvider } from "react-router-dom";
import { pagesRouter } from "./pages/Router";

const App: FC = () => {
  return <RouterProvider router={pagesRouter} />;
};

export default App;
