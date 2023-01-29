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
}
