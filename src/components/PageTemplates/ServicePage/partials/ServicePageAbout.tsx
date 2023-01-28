import { PageSection } from "components/PageComponents/PageSection";

interface IServicePageAbout {
  title: string;
  description: string;
}

export const ServicePageAbout = ({ title, description }: IServicePageAbout) => {
  return (
    <PageSection transition="fade-right" duration="2500" margin="20px 0px">
      <article>
        <h2>{title}</h2>
        <p>{description}</p>
      </article>
    </PageSection>
  );
};
