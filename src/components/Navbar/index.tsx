import "./Navbar.scss";

import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface INavbar {
  data: MenuProps["items"];
}

export const Navbar = ({ data }: INavbar) => {
  const [current, setCurrent] = useState("");

  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = ({ key }) => {
    setCurrent(key);
    navigate(`/${key}`);
  };

  return (
    <header>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={data}
        theme="dark"
      />
    </header>
  );
};
