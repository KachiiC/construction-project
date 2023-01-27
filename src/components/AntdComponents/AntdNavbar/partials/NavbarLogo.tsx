export const NavbarLogo = ({ navbarImage }: { navbarImage: string }) => {
  return (
    <div className="menu-logo">
      <img src={navbarImage} alt="" className="menu-logo-image" />
    </div>
  );
};
