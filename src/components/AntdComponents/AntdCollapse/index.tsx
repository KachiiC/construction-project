import "./AntdCollapse.scss";

import { Collapse } from "antd";
import { IAntdCollapse } from "./AntdCollapse.types";
import { paragraphParser } from "utils/stringHelpers";

export const AntdCollapse = ({ data }: IAntdCollapse) => {
  const { Panel } = Collapse;

  const collapsibleContent = data.map(({ title, content }) => (
    <Panel header={title} key={title} className="">
      {paragraphParser(content)}
    </Panel>
  ));

  return <Collapse>{collapsibleContent}</Collapse>;
};
