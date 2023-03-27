import { IServicesCardsData } from "data/Services/ServiceCardsData";

export interface IServicePage {
  description: string;
  title: string;
  image?: string;
  list: string[];
  related: string[];
  galleryImages?: IServicesCardsData[];
}

export interface IServicePageSidebar {
  related: string[];
}

export interface IServicePageList {
  serviceList: string[];
}
