import { Image } from "antd";

export const CaseStudy = ({
  title,
  images
}: {
  title: string;
  images: string[];
}) => {
  const displayedImages = images.map((img, index) => (
    <div className="site-col-4" key={index}>
      <Image src={img} alt="" />
    </div>
  ));

  return (
    <div className="case-study-container">
      <div className="case-study-grid">
        <div className="site-grid">{displayedImages}</div>
      </div>
      <div className="case-study-caption">
        <h3>{title}</h3>
        <p>
          A studio flat is typically an open plan living space, where the
          bedroom is open to the kitchen area, meaning there are no partitions
          in the property from a potential fire source, from one room to
          another. The bedroom in a studio flat is typically located at the back
          of the property, which could be blocked for a clear exit route, in the
          event of a fire.
        </p>
        <p>
          A fire suppression system must be installed in every habitable room,
          covering all escape routes, to ensure in the event of a fire,
          habitants of a property are able to escape.
        </p>
      </div>
    </div>
  );
};