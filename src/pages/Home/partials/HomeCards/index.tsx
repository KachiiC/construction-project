import { FC } from "react";
import { PageSection } from "components/PageComponents/PageSection";
import { ServiceCards } from "components/CustomComponents/ServiceCards";

export const HomeCards: FC = () => (
  <PageSection duration="2500" transition="fade-left" margin="60px 20px">
    <ServiceCards />
  </PageSection>
);
