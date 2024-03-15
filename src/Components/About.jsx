import React from "react";
import "./Styles/About.css";


const About = ({ darkMode }) => {
  return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="about-image-container">
                  <img src="/about-img-1.png" class="card-img" alt="profile" />
                </div>
              </div>
              <div className="col mt-5">
                <h1 className="about-title d-flex">About Me</h1>
                <p className="para p-3">
                  <i class="bi bi-arrow-right"></i> Ability to adapt to new
                  technologies and methodologies flexibility in learning and
                  adapting to changes in the field.
                </p>
                <p className="para p-3">
                  <i class="bi bi-arrow-right"></i> Ability to work
                  collaboratively with others, fostering a positive and
                  productive team environment.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card-container">
                  <div className="card-1 h-100">
                    <div className="card-body">
                      <ul class="about-info mt-4  px-2">
                        <li class="d-flex fs-4">
                          <span className="label">Name:</span>{" "}
                          <span>D.Arunpandian</span>
                        </li>
                        <li class="d-flex fs-4">
                          <span className="label">Date of birth:</span>{" "}
                          <span>March 08,1997</span>
                        </li>
                        <li class="d-flex fs-4">
                          <span className="label">Address:</span>{" "}
                          <span>Tirupur Tamilnadu India</span>
                        </li>
                        <li class="d-flex fs-4">
                          <span className="label">Pin code:</span>{" "}
                          <span>641 606</span>
                        </li>
                        <li class="d-flex fs-4">
                          <span className="label">Email:</span>{" "}
                          <span id="mail">arunpandianda123@gmail.com</span>
                        </li>
                        <li class="d-flex fs-4">
                          <span className="label">Phone: </span>{" "}
                          <span>+91 9688336566</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default About;
