interface ISkillsData {
  id: number | string;
  title: string;
  info: string;
  icon: {
    right: string;
    main: string;
  };
  link: string;
}

const featuresData: Array<ISkillsData> = [
  {
    id: 1,
    title: "Frontend",
    info: "Skills",
    icon: {
      right: "bx bx-chevron-right",
      main: "bx bxl-react",
    },
    link: "/frontend/skills",
  },
  {
    id: 2,
    title: "Backend",
    info: "Skills",
    icon: {
      right: "bx bx-chevron-right",
      main: "bx bxl-dev-to",
    },
    link: "/backend/skills",
  },
  {
    id: 3,
    title: "Video Maker",
    info: "Skills",
    icon: {
      right: "bx bx-chevron-right",
      main: "bx bxs-videos",
    },
    link: "https://www.youtube.com/",
  },
];

export default featuresData;
