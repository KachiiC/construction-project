import "./AntdCollapse.scss";

import { Collapse } from "antd";
import { IAntdCollapse } from "./AntdCollapse.types";

export const AntdCollapse = ({ data }: IAntdCollapse) => {
  const { Panel } = Collapse;

  const collapsibleContent = data.map(({ title, content }) => (
    <Panel header={title} key={title}>
      {content}
    </Panel>
  ));

  return <Collapse>{collapsibleContent}</Collapse>;
};
