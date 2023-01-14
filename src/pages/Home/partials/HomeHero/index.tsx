import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined
} from "@ant-design/icons";

import { FC } from "react";

export const HomeHero: FC = () => {
  return (
    <div className="home-hero">
      <div className="menu">
        <img
          src={"https://vikram-hegde.github.io/resources/images/menu.svg"}
          alt="menu icon"
        />
      </div>
      <div className="hero"></div>
      <div className="header">Company Name</div>
      <div className="content">
        <div className="heading">
          <h3>Ben and Jimmy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            odit provident, consectetur labore nesciunt dolores est placeat
            ducimus quasi iure.
          </p>
        </div>
      </div>
      <div className="small-img small1"></div>
      <div className="small-img small2"></div>
      <div className="small-img small3"></div>
      <div className="readmore">
        <img
          src="https://vikram-hegde.github.io/resources/images/read%20more.svg"
          alt=""
        />
      </div>
      <div className="social">
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <LinkedinOutlined style={{ fontSize: "30px", color: "white" }} />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <FacebookOutlined style={{ fontSize: "30px", color: "white" }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <InstagramOutlined style={{ fontSize: "30px", color: "white" }} />
        </a>
      </div>
    </div>
  );
};
