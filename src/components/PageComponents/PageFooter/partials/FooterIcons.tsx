import { FC } from "react";
import { SocialMediaIconsList } from "data/SocialMediaLinks";

export const FooterIcons: FC = () => {
  const iconsList = SocialMediaIconsList("50px", "white");

  const displayedFooterIcons = iconsList.map(({ icon, link }) => (
    <div className="footer-icons-link" key={link}>
      <a href={link}>{icon}</a>
    </div>
  ));

  return <div className="footer-icons">{displayedFooterIcons}</div>;
};
