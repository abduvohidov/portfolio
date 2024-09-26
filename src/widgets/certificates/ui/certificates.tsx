import { Line } from "../../../shared/Line";
import { certificates } from "../constants/certificates";
import "./certificates.module.scss";

function certificatesMap() {
  if (certificates.length) {
    return certificates.map((item, index) => {
      return (
        <div className="col-xl-3 mt-4">
          <img src={item.img} width={300} key={index} alt="certificate.png" />
        </div>
      );
    });
  } else {
    return "NOT FOUND!";
  }
}

export const Certificates = () => {
  return (
    <section>
      <div className="container">
        <h1 className="text-center text--light">Certificates</h1>
        <div className="row justify-content-center">{certificatesMap()}</div>
        <Line />
      </div>
    </section>
  );
};
