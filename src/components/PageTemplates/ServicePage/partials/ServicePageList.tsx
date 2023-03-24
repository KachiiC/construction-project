import { CheckOutlined } from "@ant-design/icons";
import { IServicePageList } from "../ServicePage.types";
import { PageSection } from "components/PageComponents/PageSection";

export const ServicePageList = ({ serviceList }: IServicePageList) => {
  const displayedList = serviceList.map((point, index) => (
    <div className="service-page-tags-row" key={index}>
      <div className="service-page-tags-tick">
        <CheckOutlined style={{ fontSize: "15px" }} />
      </div>
      <div className="service-page-tags-point">{point}</div>
    </div>
  ));

  return (
    <PageSection transition="fade-left" duration="4000" margin="0px">
      <div className="service-page-list">
        <h3>Services we provide</h3>
        <div className="service-page-tags">{displayedList}</div>
      </div>
    </PageSection>
  );
};
