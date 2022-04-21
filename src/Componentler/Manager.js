import React from "react";
import { Container } from "reactstrap";
const Manager = () => {
  return (
    <div>
      <section id={"manager"}>
        <Container>
          <div className="row">
            {/* Row Başlangıç */}

            <div className="col-lg-6 pe-5">
              <img
                src="https://technext.github.io/productly/v1.0.0/assets/img/manager/manager.png"
                className="img-fluid"
              />
            </div>

            <div className="col-lg-6 ps-4">
              <h5 className="text-secondary">Easier decision making for</h5>

              <h2 className="mb-2">Product Managers</h2>
              <p className="text-secondary mb-5">
                The Myspace page defines the individual,his or her
                characteristics, traits, personal choices and the overall
                personality of the person
              </p>
              <div className="d-flex align-items-center">
                <img
                  src="https://technext.github.io/productly/v1.0.0/assets/img/manager/tick.png"
                  alt=""
                  className="me-4"
                />
                <p>
                  Never worry about overpaying for your <br />
                  energy again.
                </p>
              </div>

              <div className="d-flex align-items-center">
                <img
                  src="https://technext.github.io/productly/v1.0.0/assets/img/manager/tick.png"
                  alt=""
                  className="me-4"
                />
                <p>
                  We will only switch you to energy companies <br />
                  that we trust and will treat you right
                </p>
              </div>

              <div className="d-flex align-items-center">
                <img
                  src="https://technext.github.io/productly/v1.0.0/assets/img/manager/tick.png"
                  alt=""
                  className="me-4"
                />
                <p>
                  We track the markets daily and know where the <br />
                  savings are.
                </p>
              </div>
            </div>

            {/* Row Bitiş */}
          </div>
        </Container>
      </section>
    </div>
  );
};
export default Manager;
