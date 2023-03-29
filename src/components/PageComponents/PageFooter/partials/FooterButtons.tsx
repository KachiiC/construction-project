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
    <div className="footer-address">
      <h3>Address</h3>
      <p>9 Limes Grove Beckenham BR3 6NS</p>
    </div>
  </div>
);
