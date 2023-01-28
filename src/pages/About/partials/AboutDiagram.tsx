import { AboutDiagramSection } from "./AboutDiagramSection";
import { PageSection } from "components/PageComponents/PageSection";
import { aboutDiagramData } from "data/AboutData";

export const AboutDiagram = () => (
  <PageSection
    transition="zoom-in"
    margin="60px 0px"
    padding="20px 40px"
    duration="3000"
  >
    <div className="lower-section">
      <div className="headline">
        <div className="line line--horizontal line--left" />
        <h2 className="boxed-headline">About VVS Property Group</h2>
        <div className="line line--horizontal line--right" />
      </div>
      <div className="line line--vertical line--top" />
      <div className="line line--vertical line--bottom" />
      <div className="spacer" />
      <AboutDiagramSection title="What" {...aboutDiagramData.What} />
      <AboutDiagramSection title="Who" {...aboutDiagramData.Who} />
      <div className="spacer" />
      <div className="spacer" />
      <AboutDiagramSection title="When" {...aboutDiagramData.When} />
      <AboutDiagramSection title="Values" {...aboutDiagramData.Values} />
    </div>
  </PageSection>
);
