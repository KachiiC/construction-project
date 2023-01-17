import "./AntdCollapse.scss";

import { Collapse } from "antd";

interface IAntdCollapsible {
  data: {
    title: string;
    content: JSX.Element | string;
  }[];
}

export const AntdCollapsible = ({ data }: IAntdCollapsible) => {
  const { Panel } = Collapse;

  const collapsibleContent = data.map(({ title, content }) => (
    <Panel header={title} key={title}>
      {content}
    </Panel>
  ));
  return <Collapse>{collapsibleContent}</Collapse>;
};
