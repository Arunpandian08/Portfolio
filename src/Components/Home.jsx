import React from 'react';
import './Styles/Home.css'
const Home = ({ darkMode }) => {
    return (
        <div className='container' id='home'>
            <div className="row">
                <div className="col">
                    <div className="image-container">
                        <img src='/home-img.png' class="card-img" alt="profile" />
                    </div>
                </div>
                <div className="col">
                    <div class="card h-100">
                        <div class="card-body text-right">
                            <h1 class='card-hi'>Hello...!!!</h1>
                            <h5 class="card-name">I'm <span>Arun</span></h5>
                            <h6 class="card-text">Passionate <span>MERN Stack Developer</span></h6>
                            <h6 className='card-foot p-1 fs-3'>I love to start my Carrier as Full stack developer</h6>
                            <h6 className="card-foot p-1 fs-3">Always ready to collaborate with knowledgeable Persons with update my tecky knowledge</h6>
                            <div className="home-btn p-3">
                                <button class='btns'>
                                    <a href="tel:+919688336566" className='text-decoration-none '><span className='text-white'> Contact Me</span><i></i></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;