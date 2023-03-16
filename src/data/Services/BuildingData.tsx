import BuildingImg from "assets/images/service_images/building.jpg";

export const BuildingDataList = [
  "Complete refurbs",
  "Block paving",
  "Brickwork",
  "Small building works",
  "Large building works",
  "Design and project management",
  "Gardens"
];

export const BuildingQuestionsData = [
  {
    title: "Can you advise me on a house extension?",
    content:
      "Yes, we can help you through every stage of the extension and provide all the required trades to complete it."
  },
  {
    title: "Do you have qualified builders on your team?",
    content:
      "Yes, all members of the Philby's team are city and guilds qualified. We have gas safe registered engineers, NICEIC approved contractor electricians and hold safe contractor status."
  },
  {
    title: "Do you offer loft conversions?",
    content:
      "Yes, we offer loft conversions and can provide all supporting trades."
  }
];

export const BuildingData = {
  title: "Building",
  description:
    "At VVS we pride ourselves on being a trusted and reliable builder completing all aspects of building including small and large scale extensions. We specialise in domestic extensions and can help with all aspects such as planning, architecture and project management. VVS has a highly reputable team of tradespeople that can complete your home extension to an exceptional standard, making the process as smooth and efficient as possible for our customers.",
  image: BuildingImg,
  list: BuildingDataList,
  questions: BuildingQuestionsData,
  related: ["Carpentry", "Roofing", "Painting and Decorating"]
};
