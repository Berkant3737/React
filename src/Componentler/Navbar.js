import React from "react";
import { Container} from "reactstrap";
import logo from '../resimler/logo.png'
const Navbar = () => {
  return (
    <div>
      <Container>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
              <a className="navbar-brand " href="google.com">
          <img src={logo} alt="" />
           </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
              <i class="fa-solid fa-align-justify"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              >
            
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <a className="nav-link" href="#">
                HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    SHOP
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    PROMOTION
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    PAGES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    BLOG
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACT
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a className="nav-link btn1" href="#">
                    Sign In
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a className="nav-link btn2" href="#">
                    Sign Up
                  </a>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
