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
    <div className="home-about-container">
      <div className="home-about-image">
        <img src={image} alt="" />
      </div>
      <div className="home-about-caption">
        <h2>{heading}</h2>
        <p>{text}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};
