import { ISectionProps } from "./Section.types";

export const PageSection = ({
  children,
  transition,
  duration,
  margin,
  padding,
  className
}: ISectionProps) => {
  const styles = {
    margin,
    padding
  };

  return (
    <section
      data-aos={transition}
      data-aos-duration={duration}
      style={styles}
      className={className}
    >
      {children}
    </section>
  );
};
