import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import logo from '../../assets/NavbarIcons/logo.png';
import menuIcon from '../../assets/NavbarIcons/menuIcon.png';
import menuCloseIcon from '../../assets/NavbarIcons/close.png';

const Navbar = ({ isOpen, setIsOpen }) => {
    const [activeLink, setActiveLink] = useState('hero-section');

    const navItems = [
        { id: 'hero-section', name: 'Home', offset: -80 },
        { id: 'about-section', name: 'About', offset: -60 },
        { id: 'skills-section', name: 'Skills', offset: -60 },
        { id: 'project-section', name: 'Projects', offset: -60 },
        { id: 'resume-section', name: 'Resume', offset: -60 },
        { id: 'contact-section', name: 'Contact', offset: -60 },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 80; // Adjusted for navbar height

            navItems.forEach((item) => {
                const section = document.getElementById(item.id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveLink(item.id);
                    }
                }
            });
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar">
            <nav>
                <div className="nav-brand">
                    <a href="/">
                        <img src={logo} width='120px' height='60px' alt="logo" />
                    </a>
                </div>
                <ul className="nav-links">
                    {navItems.map((item) => (
                        <li key={item.id} className={`nav-items animate__animated animate__flipInX ${activeLink === item.id ? 'active' : ''}`}>
                            <Link
                                to={item.id}
                                spy={true}
                                smooth={true}
                                offset={item.offset}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}<span></span><span></span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="action-btn" onClick={handleToggleMenu} aria-expanded={isOpen} aria-controls="dropdown_menu">
                    {isOpen ? <img className='closeIcon' src={menuCloseIcon} width='50px' height='50px' alt="close-menu-icon" />
                        : <img src={menuIcon} width='50px' height='45px' alt="open-menu-icon" />}
                </div>
            </nav>
            <div className={`dropdown_menu ${isOpen ? 'open' : ''}`} id="dropdown_menu">
                <ul className="nav-links">
                    {navItems.map((item) => (
                        <li key={item.id} className={`nav-items animate__animated ${isOpen ? 'animate__flipInX' : ''} ${activeLink === item.id ? 'active' : ''}`}>
                            <Link
                                to={item.id}
                                spy={true}
                                smooth={true}
                                offset={item.offset}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
