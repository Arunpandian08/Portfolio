import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css'


const Navbar = ({ darkMode, toggleTheme }) => {

    return (
        <nav class="navbar navbar-expand-lg ">
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
                    <div class="offcanvas-body">
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item">
                                <Link to='/' class="nav-link" >Home<span className='line p-2'>|</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About<span className='line p-2'>|</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/skills">Skills<span className='line p-2'>|</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/resume">Resume<span className='line p-2'>|</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <Link to='/' class="nav-link" >Home<span className='p-2'>|</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About<span className='p-2'>|</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/skills">Skills<span className='p-2'>|</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/resume">Resume<span className='p-2'>|</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div> */}
                <div class='row'>
                    {/* <div className="col">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div> */}
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