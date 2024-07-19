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
    name: "instagram",
    icon: "bx bxl-instagram-alt",
    link: "https://www.instagram.com/abduvohidovabdullokh/",
  },
  {
    id: 3,
    name: "facebook",
    icon: "bx bxl-facebook-circle",
    link: "https://www.facebook.com/abdulloh.abduvohidov.79",
  },
];

export default socials;
