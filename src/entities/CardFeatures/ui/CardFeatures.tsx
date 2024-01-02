import "../index.scss";

export const CardFeatures = ({ data }: any) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-10 m-auto mt-5">
      <a className="text-decoration-none">
        <div className="features-box">
          <i className={`${data.icon.main} head-icon text--custom`}></i>
          <h4 className="text--light transition-300 mt-4">{data.title}</h4>
          <p className="text--light fs-6 d-flex align-items-center">
            <span className="transition-300">{data.info}</span>
            <i
              className={`${data.icon.right} bottom-icon transition-300 fs-6`}
            ></i>
          </p>
        </div>
      </a>
    </div>
  );
};
