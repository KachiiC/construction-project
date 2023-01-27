import { Tag } from "antd";

export const ServicePageList = ({ serviceList }: { serviceList: string[] }) => {
  const displayedList = serviceList.map((point, index) => {
    const tagStyle = {
      border: "1px solid white",
      fontSize: "18px",
      padding: 5,
      margin: 5
    };
    return (
      <Tag color="#003366" key={index} style={tagStyle}>
        {point}
      </Tag>
    );
  });

  return (
    <div className="service-page-list">
      <h3>What we provide</h3>
      <div className="service-page-tags-container">{displayedList}</div>
    </div>
  );
};
