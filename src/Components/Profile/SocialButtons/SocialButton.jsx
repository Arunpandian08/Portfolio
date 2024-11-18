import React, { forwardRef } from 'react'
import './socialButton.css'

const SocialButton = forwardRef((props, ref) => {
    return (
        <div className="social" ref={ref}>
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
    )
})

export default SocialButton