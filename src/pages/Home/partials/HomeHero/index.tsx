import { FC } from "react";
import { Hero } from "components/PageComponents/PageHero";
import { HomeHeroData } from "data/HomeData";
import { PageSection } from "components/PageComponents/PageSection";

export const HomeHero: FC = () => (
  <PageSection transition="fade-in" duration="3000" padding="0">
    <Hero {...HomeHeroData} />
  </PageSection>
);
