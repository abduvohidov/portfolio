export const ProgressList = ({ data }: any) => {
  return (
    <>
      <div className="progress-head mt-4">
        <p className="text-uppercase mb-1">
          <span className="fw-bold text--light">{data.type}</span>
          <span className="fw-bold text--light p-4 bg-transparent">{data.procent}%</span>
        </p>
      </div>
      <div className="progress bg-secondary w-75" style={{height: '7px'}}>
        <div
          className="progress-bar bg--custom"
          role="progressbar"
          style={{ width: `${data.procent}%` }}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </>
  );
};
