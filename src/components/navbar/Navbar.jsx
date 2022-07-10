import React from "react";
import './navbar.css'
import logo from "./logo.svg";

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="container">
          <div>
            <a className="navbar-brand" href="http://">
              <img src={logo} alt="belton_logo" />
            </a>
          </div>
          <div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    style={{color: "red"}}
                    className="nav-link active"
                    aria-current="page"
                    href="http://"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="http://"
                  >
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="http://"
                  >
                    SERVICES
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="http://"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="http://navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
