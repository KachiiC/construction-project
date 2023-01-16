import './PageContainer.scss'

import Aos from "aos";
import Footer from "components/Footer";
import { Navbar } from "components/Navbar";
import { navbarItems } from "data/NavbarData";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PageContainer = ({ children }: { children: JSX.Element }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    Aos.init();
  }, [pathname]);

  return (
    <main>
      <Navbar data={navbarItems} />
      <div className="page-container">{children}</div>
      <Footer />
    </main>
  );
};
