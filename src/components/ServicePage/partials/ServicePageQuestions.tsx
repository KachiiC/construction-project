import { AntdCollapsible } from "components/AntdCollapse";

const testData = [
  {
    title: "First Question",
    content:
      "Laoreet fusce condimentum venenatis quisque imperdiet ornare cras faucibus convallis, pharetra habitasse elementum ut bibendum per sociosqu phasellus etiam, velit faucibus integer torquent leo elementum maecenas netus."
  },
  {
    title: "Second Question",
    content:
      "Laoreet fusce condimentum venenatis quisque imperdiet ornare cras faucibus convallis, pharetra habitasse elementum ut bibendum per sociosqu phasellus etiam, velit faucibus integer torquent leo elementum maecenas netus."
  },
  {
    title: "Third Question",
    content:
      "Laoreet fusce condimentum venenatis quisque imperdiet ornare cras faucibus convallis, pharetra habitasse elementum ut bibendum per sociosqu phasellus etiam, velit faucibus integer torquent leo elementum maecenas netus."
  }
];

export const ServicePageQuestions = () => {
  return (
    <div className="service-page-questions">
      <h3>Frequently Asked Questions</h3>
      <AntdCollapsible data={testData} />
    </div>
  );
};
