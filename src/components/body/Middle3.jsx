import React from "react";
import "./middle3.css";
import Button from "../button/button3";
import logoSoup from "./image/main/4.avif";

const Middle = () => {
  return (
    <div>
      <section className="three">
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
                    <img src={logoSoup} alt="soup" />
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
