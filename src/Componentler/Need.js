import React from "react";
import { Container } from "reactstrap";
const Need = () => {
  return (
    <div>
      <section id={"need"}>
        <Container>
          <div className="row justify-content-center text-center">
            {/* Row Başlangıç */}
            <div className="col-lg-6">
              <h1 className="mb-5">Need a super hero?</h1>
              <p className=" mb-4">
              Do you require some help for your project: Conception workshop,
              <br />
              prototyping, marketing strategy, landing page, Ux/UI?
              </p>
              <button className="btn btn-warning btn-md">Contact our expert</button>
            </div>

            {/* Row Bitiş */}
          </div>
        </Container>
      </section>
    </div>
  );
};
export default Need;
