import { IMobileNavbar } from "../AntdNavbar.types";
import { Menu } from "antd";

export const MobileMenu = ({ data, onClick }: IMobileNavbar) => {
  return (
    <div className="mobile-menu">
      <Menu
        theme="dark"
        onClick={onClick}
        className="mobile-menu-container"
        mode="inline"
        items={data}
      />
    </div>
  );
};
