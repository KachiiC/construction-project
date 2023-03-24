import { PageSection } from "components/PageComponents/PageSection";
import { paragraphParser } from "utils/stringHelpers";

interface IServicePageAbout {
  title: string;
  description: string;
}

export const ServicePageAbout = ({ title, description }: IServicePageAbout) => (
  <PageSection transition="fade-right" duration="7000" margin="20px 0px">
    <article className="service-page-about">
      <h2>{title}</h2>
      <div className="service-page-about-description">{paragraphParser(description)}</div>
    </article>
  </PageSection>
);
