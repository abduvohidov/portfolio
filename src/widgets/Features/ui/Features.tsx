import "../styles/index.scss";
import { Line } from "../../../shared/Line";
import { CardFeatures } from "../../../entities/CardFeatures";
import featuresData from "../constants/featuresData";

export const Features = () => {
  return (
    <section className="section-features">
      <div
        className="container"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <div className="features-head">
          <p className="text--custom mb-0 fs-7 text-uppercase fw-bold">
            Features
          </p>
          <h3 className="text--light fs-1">What can i do ?</h3>
        </div>
        <div className="features-body">
          <div className="row">
            {featuresData.length
              ? featuresData.map((item, index) => {
                  return <CardFeatures key={index} data={item} />;
                })
              : "Card"}
          </div>
        </div>
        <Line />
      </div>
    </section>
  );
};
