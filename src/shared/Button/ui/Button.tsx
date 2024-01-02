import "../style/index.scss";

export const Button = ({ data }: any) => {
  return (
    <>
      <li className="button-social d-flex justify-content-center align-items-center">
        <a href={data.link} target="_blank">
          <i className={`${data.icon} button-social-icon`}></i>
        </a>
      </li>
    </>
  );
};
