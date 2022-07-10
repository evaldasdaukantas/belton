import React from "react";
import "./middle.css";
import Button from "../button/button2";
import logoPlate from "./image/main/2.avif";

const Middle = () => {
  return (
    <div>
      <section className="first">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="text">
                  <h2>Delicious food creates memories</h2>
                  <br />
                  <p>
                    Belton is food studio that not just caters out
                    deliciousness, but lives by the philosophy that nothing
                    brings people together like good food. Whatever the occasion
                    that you need our food for, whatever dietary requirements,
                    we will make it happen.
                  </p>
                  <br />
                  <Button />
                </div>
                <div className="col">
                  <div className="image">
                    <img src={logoPlate} alt="plate" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Middle;
