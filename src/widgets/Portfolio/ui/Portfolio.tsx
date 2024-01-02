import { Line } from "../../../shared/Line";
import { CardPortfolio } from "../../../entities/CardPortfolio";
import portfolio from "../constants/portfolio";

export const Portfolio = () => {
  return (
    <section>
      <div className="container">
        <p className="text-center text--custom fs-7 mb-0">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </p>
        <h1 className="text-center text--light">Portfolio</h1>
        <div className="row">
          {portfolio.length
            ? portfolio.map((item, index) => {
                return <CardPortfolio key={index} data={item} />;
              })
            : "Not found !"}
        </div>
        <Line />
      </div>
    </section>
  );
};
