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
        <div className="small-menu">
          <Menu
            theme="dark"
            onClick={onClick}
            style={{ width: "100vw" }}
            mode="inline"
            items={data}
          />
        </div>
      )}
    </>
  );
};
