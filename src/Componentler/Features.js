import React from "react";
import { Container } from "reactstrap";
import icon1 from "../resimler/icon1.png";
import icon2 from '../resimler/icon2.png';
import icon3 from '../resimler/icon3.png';
import icon4 from '../resimler/icon4.png';
const Features = () => {
  return (
    <div>
      <section id={"features"}>
        <Container>
          <h1 className="text-center fw-bold mb-4 fs-9 mt-5 pt-5">
            We design tools to unveil your superpowers
          </h1>
          <div className="row mt-5">
            {/* Satır Başlangıç */}

            {/* Birinci Sütun */}
            <div className="col-lg-3 mb-2">
              <img src={icon1} alt="" className="mb-3" />
              <h4 className="mb-3">First click tests</h4>
              <p className="mb-0 ">
              Sports betting,lottery and bingo playing for the fun
              </p>
            </div>
            {/* Birinci Sütun */}

            {/* İkinci Sütun */}
            <div className="col-lg-3 mb-2">
              <img src={icon2} alt="" className="mb-3" />
              <h4 className="mb-3">First click tests</h4>
              <p className="mb-0 ">
              The Myspace page defines the individual.
              </p>

            </div>
            {/* İkinci Sütun */}

            {/* Üçüncü Sütun */}
            <div className="col-lg-3 mb-2">
              <img src={icon3} alt="" className="mb-3" />
              <h4 className="mb-3">First click tests</h4>
              <p className="mb-0 ">
                While most people enjoy <br /> casino gambling,
              </p>
            </div>
            {/* Üçüncü Sütun */}

            {/* Dördüncü Sütun */}
            <div className="col-lg-3 mb-2">
              <img src={icon4} alt="" className="mb-3" />
              <h4 className="mb-3">First click tests</h4>
              <p className="mb-0 ">
              Personal choices and the overall personality of the person.
              </p>
            </div>
            {/* Dördüncü Sütun */}

            <div className="text-center">
                <a href="#!" className="btn btn-warning" role={'button'}>SIGN UP NOW</a>
            </div>

            {/* Satır Bitiş */}
          </div>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default Features;
