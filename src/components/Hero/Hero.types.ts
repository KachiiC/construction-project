export interface IHeroImages {
  main: string;
  smallImageOne: string;
  smallImageTwo: string;
  smallImageThree: string;
}

export interface IHeroIcons {
  icon: JSX.Element;
  link: string;
}

export interface IHero {
  image: string;
  icon?: string;
  title?: string;
}
