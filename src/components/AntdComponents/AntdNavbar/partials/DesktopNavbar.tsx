import { IDesktopNavbar } from "../AntdNavbar.types";
import { Menu } from "antd";

export const DesktopNavbar = ({ onClick, current, data }: IDesktopNavbar) => (
  <div className="desktop-menu">
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={data}
      theme="dark"
    />
  </div>
);
