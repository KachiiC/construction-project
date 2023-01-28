import "./HomeTestimony.scss";

import { FC } from "react";
import { PageSection } from "components/PageComponents/PageSection";

export const HomeTestimony: FC = () => (
  <PageSection duration="2500" transition="fade-right" margin="60px 20px">
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
  </PageSection>
);
