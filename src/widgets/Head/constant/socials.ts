interface ISocials {
  id: number | string;
  name: string;
  icon: string;
  link: string;
};

const socials: Array<ISocials> = [
  {
    id: 1,
    name: "telegram",
    icon: "bx bxl-telegram",
    link: "https://t.me/abduvohidovabdullokh",
  },
  {
    id: 2,
    name: "youtube",
    icon: "bx bxl-youtube",
    link: "https://www.youtube.com/@abduvohidovabdullah",
  },
  {
    id: 3,
    name: "facebook",
    icon: "bx bxl-facebook-circle",
    link: "https://www.facebook.com/abdulloh.abduvohidov.79",
  },
  {
    id: 4,
    name: "linkedin",
    icon: "bx bxl-linkedin",
    link: "https://www.linkedin.com/in/abdullah-abduvohidov-5a79b325a/",
  },
];

export default socials;
