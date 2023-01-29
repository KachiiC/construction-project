import "./Home.scss";

import { FC } from "react";
import { HomeAbout } from "./partials/HomeAbout";
import { HomeHero } from "./partials/HomeHero";
import { HomeTestimony } from "./partials/HomeTestimony";
import { ServiceCards } from "components/CustomComponents/ServiceCards";

const Home: FC = () => (
  <>
    <HomeHero />
    <HomeAbout />
    <ServiceCards />
    <HomeTestimony />
  </>
);

export default Home;
