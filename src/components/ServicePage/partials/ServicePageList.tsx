import { Tag } from "antd";

const testServiceListData = [
  "Airlock",
  "Bathroom Refurbishment",
  "Blocked Toilets, Sinks & Pipes",
  "Ball Valves",
  "Bidets",
  "Burst Pipes",
  "Floods",
  "Gutters & Downpipes",
  "Hot Cylinder Installations",
  "Hot Water Problems",
  "Showers & Pressure Adjustments",
  "Stopcocks",
  "Tap Repairs & Installations",
  "Thermostat Problems",
  "Toilet Repairs & Installs",
  "Unvented & Vented Cylinders",
  "Waste Disposals",
  "Water Heater Repairs & Installs",
  "Water Tank Installs",
  "Wet Room Refurbishment"
];

export const ServicePageList = () => {
  const displayedList = testServiceListData.map((point, index) => {
    const tagStyle = {
      border: "1px solid white",
      fontSize: "18px",
      padding: 5,
      margin: 5
    };
    return (
      <Tag color="#929292" key={index} style={tagStyle}>
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
