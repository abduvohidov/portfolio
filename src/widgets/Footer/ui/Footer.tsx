import "../styles/main.scss";
import logo from "../../../app/img/logo.png";

export const Footer = () => {
  return (
    <footer className="container d-flex justify-content-center align-items-center flex-column mb-5">
      <img
        src={logo}
        alt="logo"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
      <a
        href="https://www.youtube.com/@abduvohidovabdullah"
        className="text-light text-decoration-none mt-3"
      >
        © <span>abduvohidovabdullokh</span>
      </a>
    </footer>
  );
};
