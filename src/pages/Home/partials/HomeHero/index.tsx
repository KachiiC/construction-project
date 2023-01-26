import { FC } from "react";
import { Hero } from "components/Hero";
import { HomeHeroData } from "pages/Home/data/HomeHeroData";

export const HomeHero: FC = () => (
  <div data-aos="zoom-in" data-aos-duration="3000">
    <Hero {...HomeHeroData} />
  </div>
);
