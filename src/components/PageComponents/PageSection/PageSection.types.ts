export type aosFadeTypes = "fade-up" | "fade-down" | "fade-right" | "fade-left";

export interface sectionProps {
  children: JSX.Element;
  transition: aosFadeTypes;
  duration?: string;
  margin?: string;
  padding?: string;
}
