import React from "react";
import logoMeat from "./image/about/jonny-caspari-unsplash-Y4a7xM45o3Ik3zxn.avif";
import logoTaco from "./image/about/christine-siracusa-unsplash-YZ4exO2X2nUq7r4v.avif";
import "./about.css";

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="container row">
          <div className="head-text col-lg-12">
            <h2>Here's our story </h2>
          </div>
          <div className="text">
            <div className="col-lg-6">
              <p>
                We started out at our home kitchen, whipping up finger-foods for
                our friends' weddings and nieces' birthdays. Everyone loved our
                food and our innovative combinations of flavors.
              </p>
            </div>
            <div className="col-lg-6">
              <p>
                So, what started out as a family operated business quickly grew
                into a fully-fledged small business that we operate out of our
                professional catering kitchen in Lisle. The team has also grown
                to 6 people; we can cater at events as large as 1,000 people.
              </p>
            </div>
          </div>
          <div className="image">
            <div className="col-lg-6">
              <img src={logoMeat} alt="burger" />
            </div>
            <div className="col-lg-6">
              <img src={logoTaco} alt="taco" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
