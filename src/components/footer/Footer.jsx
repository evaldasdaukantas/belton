import React from "react";
import "./footer.css";
import logot from './twitter-brands.svg';
import logoi from './instagram-brands.svg';
import logof from './facebook-brands.svg';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div id="col1" className="col col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="card" >
                  <div class="card-body">
                    <h6 class="card-title">Belton Catering</h6>
                    <p class="card-text">
                      We're a catering business serving the Greater Chicago
                      area, and making sure your event is remembered for all the
                      delicious food.
                    </p>
                  </div>
                </div>
              </div>
              <div id="col2" className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="card text-center">
                  <div class="card-body">
                    <h5 class="card-title">Contacts</h5>
                    <p class="card-text">
                      hello@belton.com
                      <br />
                      +5363-84635-837
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <ul>
                    <li>
                        <a href="http://">
                            <img src={logot} alt="twiter" />
                        </a>
                    </li>
                    <li>
                        <a href="http://">
                            <img src={logoi} alt="instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="http://">
                            <img src={logof} alt="facebook" />
                        </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
