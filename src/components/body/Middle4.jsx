import React from "react";
import "./middle4.css";
import logo5 from "./image/main/5.avif";
import logo6 from "./image/main/6.avif";

const Middle4 = () => {
  return (
    <div>
      <section className="four">
        <div className="container">
        <div className="col">
          <div className="row">
            <div className="card">
              <img src={logo5} className="card-img-top" alt="women" />
              <div className="card-body">
                <p className="card-text">
                Belton went above and beyond when catering our wedding at a highly unusual location. They were meticulous in every stage: the planning, the preparation, and the execution. Our guests couldn't stop raving about all the delicious hors-d'oeuvres.
                </p>
                <h5 className="card-title">Heather C.</h5>
              </div>
            </div>
            <br />
            <div className="card">
              <img src={logo6} className="card-img-top" alt="women" />
              <div className="card-body">
                <p className="card-text">
                My grandmother's 90th birthday party was made special by Belton - thank you ever so much. The team took into consideration all of our food allergy requirements and ensured that no detail was overlooked. Delicious food that I highly recommend!
                </p>
                <h5 className="card-title">Nathalie G.</h5>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Middle4;
