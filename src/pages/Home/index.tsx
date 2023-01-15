import "./Home.scss";

import { FC } from "react";
import { HomeAbout } from "./partials/HomeAbout";
import { HomeCards } from "./partials/HomeCards";
import { HomeHero } from "./partials/HomeHero";
import { HomeTestimony } from "./partials/HomeTestimony";

const Home: FC = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeCards />
      <HomeTestimony />
    </>
  );
};

export default Home;
