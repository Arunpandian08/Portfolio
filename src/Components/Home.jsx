import React from "react";
import "./Styles/Home.css";


const Home = ({ darkMode }) => {
  return (
        <div>
          <div className="container" id="home">
            <div className="row">
              <div className="col">
                <div className="image-container">
                  <img src="/home-img.png" class="card-img" alt="profile" />
                </div>
              </div>
              <div className="col">
                <div class="card h-100">
                  <div class="card-body text-right">
                    <h1 class="card-hi">Hello & Welcome</h1>
                    <h5 class="card-name">
                      I'm <span>Arun</span>
                    </h5>
                    <h6 class="card-text">
                      Passionate <span>MERN Stack Developer</span>
                    </h6>
                    <div className="card-content">
                    <p className="para1">
                      I love to start my Carrier as Full stack developer
                    </p>
                    <p className="para1">
                      Always ready to collaborate with knowledgeable Persons
                      with update my tecky knowledge
                    </p>
                    </div>
                    <div className="home-btn p-3">
                      <button class="btns">
                        <a
                          href="tel:+919688336566"
                          className="text-decoration-none "
                        >
                          <span className="text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={30}
                              viewBox="0 0 512 512"
                            >
                              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                            </svg>{" "}
                            Contact Me
                          </span>
                          <i></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Home;
