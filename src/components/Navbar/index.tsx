import "./Navbar.scss";

import { Link, useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { Menu } from "antd";
import type { MenuProps } from "antd";
import { MobileNavbar } from "./MobileNavbar";
import { useState } from "react";

interface INavbar {
  data: MenuProps["items"];
}

export const Navbar = ({ data }: INavbar) => {
  const [current, setCurrent] = useState("");
  const [showSmallMenu, setShowSmallMenu] = useState(false);

  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = ({ key }) => {
    setCurrent(key);
    navigate(`/${key}`);
  };

  return (
    <>
      <header>
        <div className="desktop-menu">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={data}
            theme="dark"
          />
        </div>
        <div className="mobile-menu">
          <div className="small-menu-logo">
            <Link to="/">Logo Placeholder</Link>
          </div>
          <div
            className="mobile-menu-btn"
            onClick={() => setShowSmallMenu(!showSmallMenu)}
          >
            <div className="mobile-menu-text">Menu</div>{" "}
            {showSmallMenu ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          </div>
        </div>
      </header>
      <MobileNavbar
        data={data}
        showMenu={showSmallMenu}
        onClick={(e: any) => {
          setShowSmallMenu(!showSmallMenu);
          onClick(e);
        }}
      />
    </>
  );
};
