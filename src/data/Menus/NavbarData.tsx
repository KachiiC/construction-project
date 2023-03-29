import {
  FolderOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  ToolOutlined
} from "@ant-design/icons";

import { MenuProps } from "antd";
import { labelKey } from "utils/routeHelper";
import { serviceListData } from "routes/ServicesRoutesData";

const servicesSubMenu = {
  label: "Services",
  key: "services",
  icon: <ToolOutlined />,
  children: Object.keys(serviceListData).map((item) => labelKey(item))
};

export const navbarItems: MenuProps["items"] = [
  {
    label: "Home",
    key: "",
    icon: <HomeOutlined />
  },
  {
    label: "About",
    key: "about",
    icon: <InfoCircleOutlined />
  },
  servicesSubMenu,
  {
    label: "Case Studies",
    key: "case-studies",
    icon: <FolderOutlined />
  },
  {
    label: "Contact",
    key: "contact",
    icon: <PhoneOutlined />
  }
];
