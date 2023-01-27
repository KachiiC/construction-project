import "./Section.scss";

import { sectionProps } from "./PageSection.types";

export const PageSection = ({
  children,
  transition,
  duration,
  margin,
  padding
}: sectionProps) => {
  const styles = {
    margin,
    padding
  };

  return (
    <section data-aos={transition} data-aos-duration={duration} style={styles}>
      {children}
    </section>
  );
};
