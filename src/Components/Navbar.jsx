import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Styles/Navbar.css'


const Navbar = ({ darkMode, toggleTheme }) => {
    const location = useLocation()
    return (
        <nav class="navbar sticky-top navbar-expand-lg ">
            <div class="container">
                <Link class="navbar-brand" to="/">D Arunpandian</Link>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <span className="mode-in">
                            <div className="col">
                                <div class="toggle-wrapper">
                                    <input class="toggle-checkbox" type="checkbox" onClick={toggleTheme} />
                                    <div class="toggle-container">
                                        <div class="toggle-button">
                                            <div class="toggle-button-circles-container">
                                                <div class="toggle-button-circle"></div>
                                                <div class="toggle-button-circle"></div>
                                                <div class="toggle-button-circle"></div>
                                                <div class="toggle-button-circle"></div>
                                                <div class="toggle-button-circle"></div>
                                                <div class="toggle-button-circle"></div>
                                                <div class="toggle-button-circle"></div>
                                                <div class="toggle-button-circle"></div>
                                                <div class="toggle-button-circle"></div>
                                                <div class="toggle-button-circle"></div>
                                                <div class="toggle-button-circle"></div>
                                                <div class="toggle-button-circle"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className={`offcanvas-body ${darkMode ? 'dark' : 'light'}`}>
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item">
                                <Link to='/'className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} >About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/skills"className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}  >Skills</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/resume" className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`} >Resume</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class='row'>   
                    <div className="col">
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="col" id='mode-out'>
                        <div class="toggle-wrapper">
                            <input class="toggle-checkbox" type="checkbox" onClick={toggleTheme} />
                            <div class="toggle-container">
                                <div class="toggle-button">
                                    <div class="toggle-button-circles-container">
                                        <div class="toggle-button-circle"></div>
                                        <div class="toggle-button-circle"></div>
                                        <div class="toggle-button-circle"></div>
                                        <div class="toggle-button-circle"></div>
                                        <div class="toggle-button-circle"></div>
                                        <div class="toggle-button-circle"></div>
                                        <div class="toggle-button-circle"></div>
                                        <div class="toggle-button-circle"></div>
                                        <div class="toggle-button-circle"></div>
                                        <div class="toggle-button-circle"></div>
                                        <div class="toggle-button-circle"></div>
                                        <div class="toggle-button-circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;