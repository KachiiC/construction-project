import "./CardText.scss";

interface ICardText {
  heading: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

export const CardText = ({
  heading,
  text,
  buttonText,
  buttonLink,
  image
}: ICardText) => {
  return (
    <div className="card-text-section">
      <div className="card-text-container">
        <h1>{heading}</h1>
        <div className="card-text-content">
          <p>{text}</p>
          <a href={buttonLink} target="_blank" rel="noreferrer">
            {buttonText}
          </a>
        </div>
        <div className="image-container">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};
