import React from "react";
import { Container } from "reactstrap";

function Footerfinish() {
  return (
    <div>
      <section id={"footer-finish"}>
        <Container>
          <div className="row d-flex justify-content-between align-items-center">
            {/* Sütun Başlangıç */}
            <div className="col-6 text-left d-inline-block">
              <p className="d-inline-block">© 2022 Your Company Inc</p>
            </div>
            <div className="col-6 text-right d-inline-block">
              <p className="d-inline-block">Made with <svg class="svg-inline--fa fa-heart fa-w-16 mx-1 text-danger"width={'16'}  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg> by <span>ThemeWagon</span> </p>
            </div>
            {/* Sütun Bitiş */}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Footerfinish;
