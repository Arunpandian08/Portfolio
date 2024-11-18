import React from 'react'
import { Link } from 'react-scroll'
import './footer.css'
import colorPenIcon from '../../assets/Images/FooterSectionIcon/footer-icon.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="footer-content">
            <ul className="socials">
                <li><a className="fa-brands fa-github" href='https://github.com/Arunpandian08' target="_blank"></a></li>
                <li><a className="fa-regular fa-envelope" href='mailto:arunpandianda123@gmail.com' target="_blank"></a></li>
                <li><a className="fa-brands fa-linkedin" href='https://www.linkedin.com/in/d-arunpandian/' target="_blank" ></a></li>
            </ul>
            <ul className="links">
                <li ><Link to='hero-section' spy={true} smooth={true} offset={80} duration={500}>Home</Link></li>
                <li ><Link to='about-section' spy={true} smooth={true} offset={-60} duration={500}>About</Link></li>
                <li ><Link to='skills-section' spy={true} smooth={true} offset={-70} duration={500}>Skills</Link></li>
                <li ><Link to='project-section' spy={true} smooth={true} offset={-80} duration={500}>Projects</Link></li>
                <li ><Link to='resume-section' spy={true} smooth={true} offset={-80} duration={500}>Resume</Link></li>
                <li ><Link to='contact-section' spy={true} smooth={true} offset={-80} duration={500}>Contact</Link></li>
            </ul>
            <p className="legal">
                Copyright &copy; {currentYear} All rights reserved | This template is made with ReactJS &nbsp;by&nbsp;&nbsp; <img width='20px' height='20px' src={colorPenIcon} alt="" /> <a href="/" target="_blank" rel="noopener noreferrer">&nbsp; Arunpandian</a>
            </p>
            </div>
        </footer>
    )
}

export default Footer