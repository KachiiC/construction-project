import "./Section.scss";

interface sectionProps {
  children: JSX.Element;
}

export const Section = ({ children }: sectionProps) => {
  return <section>{children}</section>;
};
