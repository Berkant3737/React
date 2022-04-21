import React from "react";
import { Container,input, } from "reactstrap";
const Footer = () => {
  return (
    <div>
      <footer>
        <Container>
          <hr />
          <div className="row py-5">
            {/* Sütun Başlangıç */}
            
            {/* Birinci Sütun */}
            <div className="col-lg-3 col-12 mb-sm-3 order-1 order-md-1 order-lg-1">
              <img
                src="https://technext.github.io/productly/v1.0.0/assets/img/logo.svg"
                alt=""
                width={"184"}
              />
            </div>
            {/* Birinci Sütun */}

            {/* İkinci Sütun */}
            <div className="col-lg-3 col-12 mb-sm-3 order-3 order-md-3 order-lg-2">
              <p className="fs-2">Quick Links</p>
              <ul className="p-0 m-0">
                <li className="mb-1">
                  <a href="#!">About us</a>
                </li>
                <li className="mb-1">
                  <a href="#!">Blog</a>
                </li>
                <li className="mb-1">
                  <a href="#!">Contact</a>
                </li>
                <li className="mb-1">
                  <a href="#!">FAQ</a>
                </li>
              </ul>
            </div>
            {/* İkinci Sütun */}

            {/* Üçüncü Sütun */}
            <div className="col-lg-3 col-12 mb-sm-3 order-4 order-md-4 order-lg-3">
              <p className="fs-2">Legal Stuff</p>
              <ul className="p-0 m-0">
                <li className="mb-1">
                  <a href="#!">Disclaimer</a>
                </li>
                <li className="mb-1">
                  <a href="#!">Financing</a>
                </li>
                <li className="mb-1">
                  <a href="#!">Privacy Policy</a>
                </li>
                <li className="mb-1">
                  <a href="#!">Terms of Service</a>
                </li>
              </ul>
            </div>
            {/* Üçüncü Sütun */}
            <div className="col-lg-3 col-12 mb-sm-4 order-2 order-md-2 order-lg-4">
            <p className="fs-2">knowing you're always on the best energy deal.</p>
          <form action="">
            <input type="text" className="form text-center" placeholder="Enter your phone number" />

          </form>
            <button className="btn">Sign Up Now</button>
            </div>
           
            {/* Sütun Bitiş */}
          </div>
          <hr />
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
