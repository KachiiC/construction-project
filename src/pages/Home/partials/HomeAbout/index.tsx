import { FC } from "react";
import { HomeAboutData } from "data/HomeData";
import { PageSection } from "components/PageComponents/PageSection";
import { SiteCardText } from "components/SiteComponents/SiteCardText";

export const HomeAbout: FC = () => (
  <PageSection duration="2500" transition="fade-right" margin="60px 20px">
    <SiteCardText {...HomeAboutData} />
  </PageSection>
);
