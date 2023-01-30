import { IFooterLinks } from "components/PageComponents/PageFooter/Footer.types";
import { legalList } from "data/LegalData";
import { serviceListData } from "routes/ServicesRoutesData";

export const footerLinksSectionsData: IFooterLinks[] = [
  {
    section: "Our Services",
    links: Object.keys(serviceListData)
  },
  {
    section: "Legal & More",
    links: Object.keys(legalList)
  }
];
