import React from "react";
import "./middle2.css";
import logo3 from "./image/main/3.avif";

const Middle2 = () => {
  return (
    <div>
      <section className="middle2">
        <div className="container">
          <div className="row">
            <div className="col-12 text">
              <h3>Our offers for your occasion or event</h3>
            </div>
            <div className="col-12 md">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Mini pizzas</h5>
                  <p className="card-text">
                    Delectable and bite-sized, mini pizzas are a favorite of all
                    age groups.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 md">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Smoked Trout Empanadas</h5>
                  <p className="card-text">
                    Every empanada is filled, made, and cooked by hand.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 md">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Homemade French Fries</h5>
                  <p className="card-text">
                    Surprise your guests with the best gourmet french fries
                    they've ever tasted.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 md">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Mini Lamb Burger</h5>
                  <p className="card-text">
                    Although the flavors are slightly unusual, guests always go
                    for seconds.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 md">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Stuffed Mushrooms</h5>
                  <p className="card-text">
                    A kitchen classic, this is the perfect choice if you've
                    vegans in your party.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 md">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Duck Confit Quesadillas</h5>
                  <p className="card-text">
                    Sophistication and flavor come together in this perfectly
                    cheesy quesadilla.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 image">
              <img src={logo3} alt="avocado" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Middle2;
