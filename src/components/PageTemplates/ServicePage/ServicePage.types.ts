import { IAntdSingleCollapse } from "components/AntdComponents/AntdCollapse/AntdCollapse.types";

export interface IServicePageQuestions {
  questionsData: IAntdSingleCollapse[];
}

export interface IServicePage {
  data?: any;
  heroTitle?: string;
  heroImage?: string;
}
