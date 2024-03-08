import React from 'react';
import './Styles/Home.css'
const Home = ({ darkMode }) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <div className="image-container">
                        <img src={darkMode ? "./public/images/IMG_20230127_122150_725-removebg-preview (1).png" : "./public/images/IMG_20230127_122150_725-removebg-preview.png"} class="card-img" alt="profile" />
                    </div>
                </div>
                <div className="col">
                    <div class="card h-100">
                        <div class="card-body text-right">
                            <h1 class='card-hi'>Welcome...!!!</h1>
                            <h5 class="card-name">I'm <span>Arun</span></h5>
                            <h6 class="card-text">Passionate <span>MERN Stack Developer</span></h6>
                            <h6 className='card-foot p-1 fs-3'>I love to start my Carrier as Full stack developer</h6>
                            <h6 className="card-foot p-1 fs-3">Always ready to collaborate with knowledgeable Persons with develope my tecky knowledge</h6>
                            <div className='m-5'>
                                <button class="btn"><i class="animation"></i><a href="tel:+919688336566" className='text-decoration-none fs-5' >contact me</a><i class="animation"></i>
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