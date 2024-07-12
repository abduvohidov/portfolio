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
    title: "Frontend Developer",
    info: "I create websites",
    icon: {
      right: "bx bx-chevron-right",
      main: "bx bxl-react",
    },
    link: "/",
  },
  {
    id: 2,
    title: "Graphic Designer",
    info: "I create new designes",
    icon: {
      right: "bx bx-chevron-right",
      main: "bx bx-exclude",
    },
    link: "/",
  },
  {
    id: 3,
    title: "Video Maker",
    info: "I make video",
    icon: {
      right: "bx bx-chevron-right",
      main: "bx bxs-videos",
    },
    link: "/",
  },
];

export default featuresData;
