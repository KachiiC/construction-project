import { FC } from "react";
import { FooterIconsList } from "data/Menus/FooterData";

export const FooterIcons: FC = () => {
  const displayedFooterIcons = FooterIconsList("50px", "white").map(
    ({ icon, link }) => {
      return (
        <div className="footer-icons-link" key={link}>
          <a href={link}>{icon}</a>
        </div>
      );
    }
  );
  return <div className="footer-icons">{displayedFooterIcons}</div>;
};
