import { IAboutDiagramSection } from "../About.types";

export const AboutDiagramSection = ({
  position,
  title,
  description
}: IAboutDiagramSection) => {
  const { vertical, horizontal } = position;
  return (
    <div
      className={`content-preview content-preview--${horizontal} content-preview--${vertical}`}
    >
      <h3 className="content-preview__title">{title}</h3>
      <p className="content-preview__excerpt">{description}</p>
    </div>
  );
};
