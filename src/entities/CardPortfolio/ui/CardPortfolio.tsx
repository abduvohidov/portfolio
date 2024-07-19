import "../styles/main.scss";

export const CardPortfolio = ({ data }: any) => {
  return (
    <>
      <div
        className="card-visit col-xl-4 col-lg-6 col-md-6 col-sm-6 m-auto mt-5"
        style={{ width: "18rem" }}
      >
        <img src={data.img} className="card-img-top p-3" alt="img" />
        <div className="card-body position-relative">
          <div className="card-text-block">
            <h6 className="card-title color-lightn font-weight-bold">
              {data.name}
            </h6>
            <p className="card-text card-visit-text pt-3 mb-3 color-lightn">
              {data.info}
            </p>
          </div>

          <a
            href={data.link}
            className="btn bg--custom text--dark fw-bold"
            target="_blank"
          >
            Go Visit
          </a>
        </div>
      </div>
    </>
  );
};
