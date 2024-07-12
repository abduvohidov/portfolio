interface IPortfolio {
  id: number;
  name: string;
  info: string;
  img: string;
}

const portfolio: Array<IPortfolio> = [
  {
    id: 1,
    name: "Hippo",
    info: "Сервис для электронного обмена документов и сообщений между поставщиками и заказчиками в едином окне",
    img: "https://hippo.uz/img/hippoSlide.eafffa3c.png",
  },
  {
    id: 2,
    name: "Worksale",
    info: "Самый легкий способ найти новую работу",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbWv3MTn-elGgls-01gbCFH6D_ZRbCMyblQ&s",
  },
  {
    id: 3,
    name: "Faktura",
    info: "Первый официальный оператор электронного документооборота в Узбекистане",
    img: "https://edo.faktura.uz/img/Possibilities.ec486429.png",
  },
];

export default portfolio;
