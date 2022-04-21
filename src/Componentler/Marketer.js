import React from "react";
import { Container } from "reactstrap";
const Marketer = () => {
  return (
    <div>
      <section id={"marketer"}>
        <Container>
          <div className="row">
            {/* Row Başlangıç */}
            <div className="col-lg-6 pe-4">
              <h5 className="text-secondary">Optimisation for</h5>

              <h2 className="mb-2">Marketers</h2>
              <p className="text-secondary mb-5 fw-medium">
                Few would argue that, despite the advancements of feminism over
                the past three decades, women still face a double standard when
                it comes to their behavior.
              </p>

              <h4 className="mb-2">Accessory makers</h4>
              <p className="text-secondary mb-5 fw-medium">
                While most people enjoy casino gambling, sports betting, lottery
                and bingo playing for the fun
              </p>

              <h4>Alterationists</h4>
              <p className="text-secondary mb-5 fw-medium">
                If you are looking for a new way to promote your business that
                won't cost you money,
              </p>

              <h4>Custom Design designers</h4>
              <p className="text-secondary fw-medium">
                If you are looking for a new way to promote your business that
                won't cost you more money,
              </p>
            </div>

            <div className="col-lg-6 ps-5">
              <img
                src="https://technext.github.io/productly/v1.0.0/assets/img/marketer/marketer.png"
                alt=""
                className="ps-4"
              />
            </div>
            {/* Row Bitiş */}
          </div>
        </Container>
      </section>
    </div>
  );
};
export default Marketer;
