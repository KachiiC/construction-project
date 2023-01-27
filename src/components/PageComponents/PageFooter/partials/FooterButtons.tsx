import { FC } from "react";
import { FooterIcons } from "./FooterIcons";

export const FooterButtons: FC = () => (
  <div className="footer-contact-container site-col-4">
    <div className="footer-contact-btn">
      <span>
        <a href="mailto: abc@example.com">Email</a>
      </span>
    </div>
    <FooterIcons />
  </div>
);
