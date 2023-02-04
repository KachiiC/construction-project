import { AntdCollapse } from "components/AntdComponents/AntdCollapse";
import { IServicePageQuestions } from "../ServicePage.types";
import { PageSection } from "components/PageComponents/PageSection";

export const ServicePageQuestions = ({
  questionsData
}: IServicePageQuestions) => (
  <PageSection transition="fade-right" duration="4000" margin="80px 0px">
    <div className="service-page-questions">
      <h3>Frequently Asked Questions</h3>
      <AntdCollapse data={questionsData} />
    </div>
  </PageSection>
);
