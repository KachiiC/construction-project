import { IAntdSingleCollapse } from "components/AntdComponents/AntdCollapse/AntdCollapse.types";

export interface IServicePageQuestions {
  questionsData: IAntdSingleCollapse[];
}

export interface IServicePage {
  description: string;
  title: string;
  image?: string;
  questions: IAntdSingleCollapse[];
  list: string[];
  related: string[];
}

export interface IServicePageSidebar {
  related: string[];
}

export interface IServicePageList {
  serviceList: string[];
}