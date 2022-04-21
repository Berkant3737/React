import React from "react";
import { Container } from "reactstrap";

const Hero = () => {
  return (
    <div>
      <section id={"hero"}>
        <Container>
          <div className="row d-flex align-items-center">
            {/* İlk sütun */}
            <div className="col-md-6 col-12 text-md-start text-center">
              <h1 className="mb-4 fw-bold">The Design Thinking Superpowers</h1>
              <p className="mb-4 lead text-secondary">
                Tools tutorials, design and innovation experts, all <br /> in
                one place! The most intuitive way to imagine <br /> your next
                user experience.
              </p>
              <div className="text-md-start text-center">
              <a href="#" className="btn btn-warning me-3 btn-lg">
                Get Started
              </a>
              <a
                href="#"
                className="btn btn-link text-warning fw-medium me-4 btn-lg">
              
                <svg
                  class="svg-inline--fa fa-play fa-w-14 me-2"
                  width={14}
                  height={16}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="play"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                  ></path>
                </svg>
                Watch the video
              </a>
            </div>
            </div>
            {/* Birinci sütun */}

           

            {/* İkinci Sütun */}
            
            <div className="col-md-6 col-12 text-end">
              <img src="https://technext.github.io/productly/v1.0.0/assets/img/hero/hero-img.png" className="pt-5 pt-md-0 img-fluid"  />


            </div>



            {/* Row Bitiş */}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
