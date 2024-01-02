import "../styles/index.scss";
import LOGO from "../../../app/img/logo.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg--dark py-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={LOGO} alt="logo.png" className="navbar-brand-logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bx bx-menu"></i>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
