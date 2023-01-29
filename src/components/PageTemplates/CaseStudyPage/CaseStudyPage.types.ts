export interface ICaseStudy {
  title: string;
  images: string[];
  featured: string;
}


export interface ICaseStudyPage {
  data: ICaseStudy[];
}