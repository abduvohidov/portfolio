interface IFeaturesData {
  id: number | string;
  title: string;
  info: string;
  icon: {
    right: string;
    main: string;
  };
  link: string;
}

const featuresData: Array<IFeaturesData> = [
  {
    id: 1,
    title: "Frontend",
    info: "Portfolio",
    icon: {
      right: "bx bx-chevron-right",
      main: "bx bxl-react",
    },
    link: "/frontend/portfolio",
  },
  {
    id: 2,
    title: "Backend",
    info: "Portfolio",
    icon: {
      right: "bx bx-chevron-right",
      main: "bx bxl-dev-to",
    },
    link: "/backend/porfolio",
  },
  {
    id: 3,
    title: "Video Maker",
    info: "Portfolio",
    icon: {
      right: "bx bx-chevron-right",
      main: "bx bxs-videos",
    },
    link: "https://www.youtube.com/",
  },
];

export default featuresData;
