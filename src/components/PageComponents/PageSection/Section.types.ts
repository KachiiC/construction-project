export type aosFadeTypes =
  | "fade-up"
  | "fade-down"
  | "fade-right"
  | "fade-left"
  | "fade-in"
  | "zoom-in";

export interface ISectionProps {
  children: JSX.Element;
  transition: aosFadeTypes;
  duration?: string;
  margin?: string;
  padding?: string;
  className?: string;
}
