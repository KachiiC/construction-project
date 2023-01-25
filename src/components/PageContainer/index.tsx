import "./PageContainer.scss";

import Footer from "components/Footer";
import { Navbar } from "components/Navbar";
import { navbarItems } from "data/NavbarData";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PageContainer = ({ children }: { children: JSX.Element }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById("page-container")?.scroll(0, 0);
  }, [pathname]);

  return (
    <main>
      <Navbar data={navbarItems} />
      <div className="page-container" id="page-container">{children}</div>
      <Footer />
    </main>
  );
};
