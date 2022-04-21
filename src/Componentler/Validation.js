import React from "react";
import { Container } from "reactstrap";
const Validation = () => {
  return (
    <div>
      <section id={"validation"}>
        <Container>
          <div className="row">
            {/* Row Başlangıç */}

            <div className="col-lg-6 pe-4">
              <h5 className="text-secondary">Effortless Validation for</h5>

              <h2 className="mb-2">Design Professionals</h2>
              <p className="text-secondary mb-5">
                The Myspace page defines the individual,his or her
                characteristics, traits, personal choices and the overall
              </p>

              <h4 className="mb-2">Accessory makers</h4>
              <p className="text-secondary mb-5">
                While most people enjoy casino gambling, sports betting, lottery
                and bingo playing for the fun
              </p>

              <h4>Alterationists</h4>
              <p className="text-secondary mb-5">
                If you are looking for a new way to promote your business that
                won't cost you money,
              </p>

              <h4>Custom Design designers</h4>
              <p className="text-secondary">
                If you are looking for a new way to promote your business that
                won't cost you more money,
              </p>
            </div>

            <div className="col-lg-6 ps-5">
                <img src="https://technext.github.io/productly/v1.0.0/assets/img/validation/validation.png" className="img-fluid" />
            </div>
            {/* Row Bitiş */}
          </div>
        </Container>
      </section>
    </div>
  );
};
export default Validation;
