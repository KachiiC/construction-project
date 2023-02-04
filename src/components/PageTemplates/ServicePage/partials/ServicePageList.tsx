import { IServicePageList } from "../ServicePage.types";
import { PageSection } from "components/PageComponents/PageSection";
import { Tag } from "antd";
import { tagStyle } from "../ServicePage.styles";

export const ServicePageList = ({ serviceList }: IServicePageList) => {
  const displayedList = serviceList.map((point, index) => (
    <Tag color="#003366" key={index} style={tagStyle}>
      {point}
    </Tag>
  ));

  return (
    <PageSection transition="fade-left" duration="4000" margin="60px 0px">
      <div className="service-page-list">
        <h3>Services we provide</h3>
        <div className="service-page-tags-container">{displayedList}</div>
      </div>
    </PageSection>
  );
};
