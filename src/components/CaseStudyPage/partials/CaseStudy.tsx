import { Image } from "antd";

const allImages = [
  "https://picsum.photos/750/750?image=500",
  "https://picsum.photos/750/750?image=501",
  "https://picsum.photos/750/750?image=502",
  "https://picsum.photos/750/750?image=503",
  "https://picsum.photos/750/750?image=504",
  "https://picsum.photos/750/750?image=505",
  "https://picsum.photos/750/750?image=506",
  "https://picsum.photos/750/750?image=507",
  "https://picsum.photos/750/750?image=508"
];

export const CaseStudy = ({ title }: { title: string }) => {
  const displayedImages = allImages.map((img) => (
    <div className="site-col-4">
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
