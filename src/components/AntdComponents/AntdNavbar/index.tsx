import "./AntdNavbar.scss";

import { DesktopNavbar } from "./partials/DesktopNavbar";
import { INavbar } from "./AntdNavbar.types";
import type { MenuProps } from "antd";
import { MobileMenu } from "./partials/MobileMenu";
import { MobileNavbar } from "./partials/MobileNavbar";
import { NavbarLogo } from "./partials/NavbarLogo";
import SvgLogo from "assets/images/vvs-logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AntdNavbar = ({ data }: INavbar) => {
  const [current, setCurrent] = useState("");
  const [showSmallMenu, setShowSmallMenu] = useState(false);

  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = ({ key }) => {
    setCurrent(key);
    navigate(`/${key}`);
  };

  const smallMenuLogic = showSmallMenu && (
    <MobileMenu
      data={data}
      onClick={(e: any) => {
        setShowSmallMenu(!showSmallMenu);
        onClick(e);
      }}
    />
  );

  return (
    <>
      <header>
        <NavbarLogo navbarImage={SvgLogo} />
        <DesktopNavbar onClick={onClick} current={current} data={data} />
        <MobileNavbar
          setShowSmallMenu={setShowSmallMenu}
          showSmallMenu={showSmallMenu}
        />
      </header>
      {smallMenuLogic}
    </>
  );
};
