import socials from "../constant/socials";
import ReactLogo from "../../../app/img/react-logo.png";
import { Line } from "../../../shared/Line";
import { Button } from "../../../shared/Button";

import "../styles/index.scss";

export const Head = () => {
  return (
    <section className="sectoin-header mt-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="section-header_infobox">
              <p className="text--light mb-0 fs-7 text-uppercase fw-bold">
                welcome to my world
              </p>
              <h1 className="text-white">
                Hi, I'm <strong className="text--custom">Abdullah</strong>
                <br /> I'm <strong>Software Engineer</strong>
              </h1>
              <p className="text--light mt-3">
                I am Abdullokh from Uzbekistan. I love coding and give solutions
                for your problems. I bravely know Html, Css, Javascript, ReactJS.
                If you have feedbacks or questions, don't hesitate to contact.
              </p>
            </div>
            <div className="section-header_link-to-me mt-5">
              <p className="text-uppercase text--light fw-bold">
                Find me with . . .
              </p>
              <ul className="d-flex justify-content-start mt-4 p-0">
                {socials.length
                  ? socials.map((item, index) => {
                      return <Button key={index} data={item} />;
                    })
                  : "Button"}
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 d-xl-flex d-none justify-content-end align-items-center">
            <img src={ReactLogo} alt="png" />
          </div>
        </div>
        <Line />
      </div>
    </section>
  );
};
