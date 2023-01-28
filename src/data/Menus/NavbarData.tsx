import {
  FileSearchOutlined,
  FolderOutlined,
  HomeOutlined,
  MailOutlined,
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
    icon: <MailOutlined />
  },
  servicesSubMenu,
  {
    label: "Domestic Case Studies",
    key: "domestic-case-studies",
    icon: <FolderOutlined />
  },
  {
    label: "Commercial Case Studies",
    key: "commercial-case-studies",
    icon: <FileSearchOutlined />
  },
  {
    label: "Contact",
    key: "contact",
    icon: <PhoneOutlined />
  }
];
