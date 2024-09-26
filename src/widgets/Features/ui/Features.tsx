import "../styles/index.scss";
import { Line } from "../../../shared/Line";
import { CardFeatures } from "../../../entities/CardFeatures";
import featuresData from "../constants/featuresData";

export const Features = () => {
  function windowsScroll() {
    return window.scrollTo(0, 0);
  }

  function renderData() {
    if (featuresData.length) {
      return featuresData.map((item, index) => {
        return <CardFeatures key={index} data={item} />;
      });
    }
  }

  return (
    <section className="section-features">
      <div className="container" onClick={() => windowsScroll()}>
        <div className="features-head">
          <p className="text--custom mb-0 fs-7 text-uppercase fw-bold">
            Portfolio
          </p>
          <h3 className="text--light fs-1">Projects</h3>
        </div>
        <div className="features-body">
          <div className="row">{renderData()}</div>
        </div>
        <Line />
      </div>
    </section>
  );
};
