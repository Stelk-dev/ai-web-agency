import SupremMilkLogo from "./assets/banner-1.png";
import SecondPrj1 from "./assets/banner-3.png";
import SecondPrj2 from "./assets/banner-2.png";
import SecondPrj3 from "./assets/banner-4.png";
import Man1 from "./assets/people/man_1.png";
import Man2 from "./assets/people/man_2.jpeg";
import Man3 from "./assets/people/man_3.jpeg";
import Man4 from "./assets/people/man_4.jpeg";

export const AllCases = [
  {
    title: "Suprem - Milk",
    titleFull:
      "Delivering real-time coin data to millions of Crypto Insiders visitors",
    description:
      "Crypto Insiders, the largest cryptocurrency news platform in the Netherlands, attracts over 2 million visitors monthly. Their team needed a reliable system to manage content creation and distribution across multiple channels.",
    image: SupremMilkLogo,
    route: "/use-case/suprem-milk",
    reviewerImage: Man3,
    info: [
      {
        label: "Website",
        value: "https://suprem-milk.eu/",
        isLink: true,
      },
      { label: "Location", value: "Italy" },
      { label: "Industry", value: "Agricultural" },
      {
        label: "Goal",
        value:
          "AI system to analyze agricultural products and provide insights",
      },
    ],
  },
  {
    title: "N and Group",
    description:
      "A leading tech innovator in quantum computing needed a sophisticated dashboard to visualize complex data outputs. We delivered an intuitive interface that simplified user interaction with advanced computational results.",
    image: SecondPrj1,
    route: "/use-case/n-and-group",
    reviewerImage: Man2,
    info: [
      {
        label: "Website",
        value: "https://www.n-andgroup.com/",
        isLink: true,
      },
      { label: "Location", value: "Italy" },
      { label: "Industry", value: "Mechanich" },
      {
        label: "Goal",
        value: "AI system to generate 3D accurate user models from 2D pictures",
      },
    ],
  },
  {
    title: "Virality System",
    description:
      "This environmental monitoring startup required a scalable platform to process sensor data from thousands of locations. Our solution provided real-time analytics and actionable insights for sustainability decision-makers.",
    image: SecondPrj2,
    route: "/use-case/virality-system",
    reviewerImage: Man1,
    info: [
      {
        label: "Website",
        value: "https://www.viralitysystem.it/",
        isLink: true,
      },
      { label: "Location", value: "Italy" },
      { label: "Industry", value: "Social Network" },
      {
        label: "Goal",
        value: "Full social network with AI-driven content recommendations",
      },
    ],
  },
  {
    title: "Extra Outdoor",
    description:
      "An enterprise retail group with over 50 locations needed to consolidate their digital presence. We built a centralized platform with localized customization features.",
    image: SecondPrj3,
    route: "/use-case/extra-outdoor",
    reviewerImage: Man4,
    info: [
      {
        label: "Website",
        value: "https://extraoutdoor.it/infissi/",
        isLink: true,
      },
      { label: "Location", value: "Italy" },
      { label: "Industry", value: "Fixtures and fittings" },
      {
        label: "Goal",
        value: "AI system to analyze customer behavior and improve retention",
      },
    ],
  },
  // {
  //   title: "Virality System",
  //   description:
  //     "This heritage brand required a digital transformation that respected their century-old tradition while embracing modern technology for a new generation of customers.",
  //   image: SecondPrj2,
  //   route: "/use-case/virality-system",
  // },
  // {
  //   title: "Extra Outdoor",
  //   description:
  //     "A music-focused retail chain needed analytics to understand customer behavior across physical and digital touchpoints, resulting in a 27% increase in customer retention.",
  //   image: SecondPrj3,
  //   route: "/use-case/extra-outdoor",
  // },
];

// Create a semi full body man (face and body but no legs), like the picture was done far away from him, dressed professional, crossed arms, looking at the camera with serious and professional look
