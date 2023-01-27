import { AntdCollapse } from "components/AntdComponents/AntdCollapse";
import { IServicePageQuestions } from "../ServicePage.types";

export const ServicePageQuestions = ({
  questionsData
}: IServicePageQuestions) => {
  return (
    <div className="service-page-questions">
      <h3>Frequently Asked Questions</h3>
      <AntdCollapse data={questionsData} />
    </div>
  );
};
