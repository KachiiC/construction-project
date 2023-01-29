import { MenuClickEventHandler } from "rc-menu/lib/interface";
import { MenuProps } from "antd";

export interface INavbar {
  data: MenuProps["items"];
}

export interface IMobileMenu {
  setShowSmallMenu: Function;
  showSmallMenu: boolean;
}

export interface IMobileNavbar {
  data: MenuProps["items"];
  onClick: MenuClickEventHandler;
}

export interface IDesktopNavbar {
  onClick: MenuClickEventHandler;
  current: string;
  data: MenuProps["items"];
}

export interface INavbarLogo {
  navbarImage: string;
}
