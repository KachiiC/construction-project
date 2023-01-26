import "./Footer.scss";

import { FooterButtons, FooterLinks } from "./FooterComponents";

import { FC } from "react";

const Footer: FC = () => (
  <div className="site-footer">
    <div className="site-grid">
      <FooterLinks />
      <FooterButtons />
    </div>
  </div>
);

export default Footer;
