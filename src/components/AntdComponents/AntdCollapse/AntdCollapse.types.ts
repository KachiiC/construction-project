export interface IAntdSingleCollapse {
  title: string;
  content: JSX.Element | string;
}
export interface IAntdCollapse {
  data: IAntdSingleCollapse[];
}
