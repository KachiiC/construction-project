import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { IMobileMenu } from "../AntdNavbar.types";

export const MobileNavbar = ({
  setShowSmallMenu,
  showSmallMenu
}: IMobileMenu) => (
  <div className="mobile-navbar">
    <div
      className="mobile-navbar-btn"
      onClick={() => setShowSmallMenu(!showSmallMenu)}
    >
      <div className="mobile-navbar-text">Menu</div>{" "}
      {showSmallMenu ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
    </div>
  </div>
);
