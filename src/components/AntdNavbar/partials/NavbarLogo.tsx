import { INavbarLogo } from "../AntdNavbar.types";

export const NavbarLogo = ({ navbarImage }: INavbarLogo) => (
  <div className="menu-logo">
    <img src={navbarImage} alt="" className="menu-logo-image" />
  </div>
);
