import { FC } from "react";
import { Hero } from "components/Hero";
import { HomeHeroData } from "pages/Home/data/HomeHeroData";

export const HomeHero: FC = () => <Hero {...HomeHeroData} />;
