import React from "react";
import "./contact.css";
import logoLast from "./image/contact/flat-lay-photography-of-vegetable-salad-on-plate-YZ4exOKak8IoEw55.avif";
import "./contact.css";
import Button from "../button/button5";

const Contact = () => {
  return (
    <div>
      <section className="contact">
        <div className="container-fluid">
          <div className="container">
            <div className="col-5">
              <div className="text">
                <h2>Say Hello!</h2>
                <br />
                <p>
                  We're a friendly bunch here at Belton. Place an inquiry and
                  w'll get back to you the same day.
                </p>
              </div>
            </div>
            <div className="col-8">
              <form>
                <div className="mb-3">
                  <label for="firstName" className="form-label">
                    Name*
                  </label>
                  <input
                    placeholder="Your name"
                    type="text"
                    className="form-control"
                    id="firstName"
                  />
                </div>
                <div className="mb-3">
                  <label for="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    placeholder="Your last name"
                    type="text"
                    className="form-control"
                    id="lasttName"
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                  Your email*
                  </label>
                  <input
                    placeholder="Your email address"
                    type="email"
                    className="form-control"
                    id="email"
                  />
                </div>
                  <label for="textArea" className="form-floating">
                  Message*
                </label>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Enter Your message"
                    id="textArea"
                    style={{ height: "100px" }}
                  ></textarea>
                  <label for="textArea">Enter Your message</label>
                </div>
                <br />
                <Button />
                <br />
              </form>
            </div>


          </div>
            <div className="image">
              <img src={logoLast} alt="pic" />
            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
