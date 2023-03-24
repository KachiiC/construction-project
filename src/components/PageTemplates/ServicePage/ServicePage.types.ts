export interface IServicePage {
  description: string;
  title: string;
  image?: string;
  list: string[];
  related: string[];
}

export interface IServicePageSidebar {
  related: string[];
}

export interface IServicePageList {
  serviceList: string[];
}
