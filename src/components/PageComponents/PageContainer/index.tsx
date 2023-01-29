import "./PageContainer.scss";

import { AntdNavbar } from "components/AntdComponents/AntdNavbar";
import { Footer } from "components/PageComponents/PageFooter";
import { IPageContainers } from "./PageContainers.types";
import { init } from "aos";
import { navbarItems } from "data/Menus/NavbarData";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PageContainer = ({ children }: IPageContainers) => {
  const { pathname } = useLocation();

  useEffect(() => {
    init();

    document.getElementById("page-container")?.scroll(0, 0);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <AntdNavbar data={navbarItems} />
      <div className="page-container" id="page-container">
        {children}
      </div>
      <Footer />
    </main>
  );
};
