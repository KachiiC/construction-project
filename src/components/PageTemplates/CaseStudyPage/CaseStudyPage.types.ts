export interface ICaseStudy {
  title: string;
  images: string[];
  featured: string;
  body: JSX.Element;
}


export interface ICaseStudyPage {
  data: ICaseStudy[];
}