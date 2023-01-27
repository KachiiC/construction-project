import "./Footer.scss";

import { FC } from "react";
import { FooterButtons } from "./partials/FooterButtons";
import { FooterLinksSection } from "./partials/FooterLinksSection";
import { footerLinksSectionsData } from "data/Menus/FooterData";

export const Footer: FC = () => (
  <div className="site-footer">
    <div className="site-grid">
      <FooterLinksSection data={footerLinksSectionsData} />
      <FooterButtons />
    </div>
  </div>
);
