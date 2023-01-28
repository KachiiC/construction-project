import { ISectionProps } from "./Section.types";

export const PageSection = ({
  children,
  transition,
  duration,
  margin,
  padding
}: ISectionProps) => {
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
