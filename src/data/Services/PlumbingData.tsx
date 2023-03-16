import PlumbingImg from "assets/images/service_images/plumbing.jpg";

export const PlumbingDataList = [
  "Bathrooms",
  "Kitchens",
  "Hot and cold water systems",
  "Leaks",
  "Drainage",
];

export const PlumbingQuestionsData = [
  {
    title: "Should I turn the water off if I have a leak?",
    content:
      "Yes, if you suspect a leak, switch off the water. First, please find your water stop valve, and then turn it clockwise to stop water flow into the house. These are located in the kitchen, bathroom, under the stairs or in a services cupboard. \r\n If possible, isolate the leak without turning off the main supply; for example, if you find the leak coming from an appliance, use its isolation valve to stop the water flow. If the leak is severe, switching off the electricity & gas may be required, only if it is safe."
  },
  {
    title: "Do you offer emergency callouts?",
    content:
      "Yes we have staff available 7 days a week to solve any plumbing issues."
  },
  {
    title: "How do I unblock a toilet?",
    content:
      "If your toilet is blocked, you will require a plunger, flat head screwdriver and something to protect the surrounding area. Firstly shut off the incoming water supply by locating the isolation valve, usually behind the toilet.  Protect the surrounding area from spillage. Next create a vacuum using your plunger, covering the pipe underneath the water and begin pumping. If cleared the water should begin to drain away. Still having issues? Call Philby's to book an engineer."
  }
];

export const PlumbingData = {
  title: "Plumbing",
  description:
    "VVS Property Group can help with All installation and maintenance of your Plumbing requirements. With a highly trained and skilled team of Plumbing and drainage engineers always available, we can offer efficient service to meet your needs every day of the year. Whether you need assistance with a simple job (like a leaking trap) or a highly complex one (like a complete 1st and 2nd), our specialists pride themselves on quality workmanship tailored to your needs. \r\n With years of experience, we are the number one place to go for all your Plumbing and drainage needs. We have worked on a number of both domestic and commercial properties and can help with several plumbing and drainage problems, including leak finding, new fixtures and fittings, new bathrooms / kitchens, alterations.",
  image: PlumbingImg,
  list: PlumbingDataList,
  questions: PlumbingQuestionsData,
  related: ["Carpentry", "Roofing", "Painting and Decorating"]
};
