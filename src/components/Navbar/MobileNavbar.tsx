import { Menu, MenuProps } from "antd";

export const MobileNavbar = ({
  data,
  showMenu,
  onClick
}: {
  data: MenuProps["items"];
  showMenu: boolean;
  onClick: any;
}) => {
  return (
    <>
      {showMenu && (
        <div className="small-menu-container">
          <Menu
            theme="dark"
            onClick={onClick}
            className="small-menu"
            mode="inline"
            items={data}
          />
        </div>
      )}
    </>
  );
};
