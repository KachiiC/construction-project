import "./Home.scss";

import { FC } from "react";
import Footer from "components/Footer";
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
      <Footer />
    </>
  );
};

export default Home;
