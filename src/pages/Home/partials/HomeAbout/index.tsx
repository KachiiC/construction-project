import { FC } from "react";
import { HomeAboutData } from "../../data/HomeAboutData";
import { PageSection } from "components/PageComponents/PageSection";
import { SiteCardText } from "components/SiteComponents/SiteCardText";

export const HomeAbout: FC = () => (
  <PageSection duration="2500" transition="fade-right">
    <SiteCardText {...HomeAboutData} />
  </PageSection>
);
