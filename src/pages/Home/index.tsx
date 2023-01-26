import "./Home.scss";

import { FC, useEffect } from "react";

import Aos from "aos";
import { HomeAbout } from "./partials/HomeAbout";
import { HomeCards } from "./partials/HomeCards";
import { HomeHero } from "./partials/HomeHero";
import { HomeTestimony } from "./partials/HomeTestimony";

const Home: FC = () => (
  <>
    <HomeHero />
    <HomeAbout />
    <HomeCards />
    <HomeTestimony />
  </>
);

export default Home;
