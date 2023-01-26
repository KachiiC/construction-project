import "./HomeTestimony.scss";

import { FC } from "react";

export const HomeTestimony: FC = () => (
  <div
    className="about-quote-wrapper"
    data-aos="zoom-in"
    data-aos-duration="1500"
  >
    <div className="about-quote-container">
      <h1>
        Intuitive design happens when{" "}
        <span style={{ fontWeight: 900 }}>current knowledge</span> is the same
        as the <span style={{ fontWeight: 900 }}>target knowledge.</span>
      </h1>
      <h4>
        Quoter
        <br />
      </h4>
    </div>
  </div>
);
