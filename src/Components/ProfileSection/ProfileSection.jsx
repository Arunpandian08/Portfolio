import React from 'react'
import './profileSection.css'
import profile from '../../assets/HeroSectionImages/profileImg.png'
import downloadIcon from '../../assets/HeroSectionImages/downloadIcon.png'
import Tilt from 'react-parallax-tilt';

const ProfileSection = () => {
    return (
        <section className='home-container' id='hero-section'>
            <article className='hero-article'>
                        <Tilt
                            className="parallax-effect-img"
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={5000}
                            transitionSpeed={1000}
                            scale={1.051}
                            tiltReverse={true}
                        >
                <div className="image animate__animated animate__fadeInLeft">
                    <div className="blue-bg-outer">
                            <div className="white-bg">
                                <div className="blue-bg">
                                        <img className='img' src={profile} alt="profile-image" />
                                </div>
                            </div>
                    </div>
                </div>
                        </Tilt>
            </article>
            <article className='main-text-area'>
                <div className="profile">
                    <small><span>Hello</span> &nbsp;&&&nbsp; <span>welcome</span></small>
                    <div className="name-area">
                        <h3 className="prefix">I am &nbsp;&nbsp; <span className='animate__animated animate__lightSpeedInRight'>Arunpandian</span></h3>
                    </div>
                    <div className="prof">
                        <h3>MERN STACK DEVELOPER</h3>
                    </div>
                </div>
                <div className="button-group animate__animated animate__fadeIn">
                    <div>
                        <button className="css-buttons-io-button">
                            <img src={downloadIcon} width='20px' height='20px' alt="" />
                            <span><a href="/Arunpandian-FullStackDeveloper.pdf" download="Arunpandian-FullStackDeveloper.pdf">Download CV</a></span>
                        </button>
                    </div>
                    <div>
                        <button className="hire-button">
                            <span className="shadow"></span>
                            <span className="edge"></span>
                            <span className="front text">
                                <a href="mailto:arunpandianda123@gmail.com" target="_blank">Hire Me !</a>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="social">
                    <ul className="wrapper">
                        <li className="icon github animate__animated animate__fadeIn">
                            <span className="tooltip">GitHub</span>
                            <a href="https://github.com/Arunpandian08" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github fa-xl"></i>
                            </a>
                        </li>
                        <li className="icon email animate__animated animate__fadeIn">
                            <span className="tooltip">Email</span>
                            <a href="mailto:arunpandianda123@gmail.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-regular fa-envelope fa-xl"></i>
                            </a>
                        </li>
                        <li className="icon linkedin animate__animated animate__fadeIn">
                            <span className="tooltip">LinkedIn</span>
                            <a href="https://www.linkedin.com/in/d-arunpandian/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin-in fa-xl"></i>
                            </a>
                        </li>
                        <li className="icon instagram animate__animated animate__fadeIn">
                            <span className="tooltip">Instagram</span>
                            <a href="https://www.instagram.com/arun_fsd_08/?hl=en" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram fa-xl"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default ProfileSection