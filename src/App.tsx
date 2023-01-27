import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { pagesRouter } from "./routes/Router";

const App: FC = () => {
  return <RouterProvider router={pagesRouter} />;
};

export default App;
