export interface IHero {
  title: string;
  subTitle: string;
  description: string;
  images: {
    main: string;
    smallImageOne: string;
    smallImageTwo: string;
    smallImageThree: string;
  };
  icons?: {
    icon: JSX.Element;
    link: string;
  }[];
}
