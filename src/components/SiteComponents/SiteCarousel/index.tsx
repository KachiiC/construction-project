import "./SiteCarousel.scss";

interface ISiteCarousel {
  data: {
    image: string;
    caption?: string;
  }[];
}

export const SiteCarousel = ({ data }: ISiteCarousel) => {
  return <h1></h1>;
};
