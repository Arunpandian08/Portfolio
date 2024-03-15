import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";

const Navbar = ({ darkMode, toggleTheme }) => {
    return (
        <nav class="navbar sticky-top navbar-expand-lg ">
            <div class="container">
                <Link class="navbar-brand" to="/">
                    D Arunpandian
                </Link>
                <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div div class={`offcanvas-header ${darkMode ? "dark" : "light"}`}>
                        <h5 class="offcanvas-title m-3" id="offcanvasNavbarLabel">
                            Menu
                        </h5>
                        <span className="mode-in">
                            <div className="col">
                                <div class="toggle-wrapper">
                                    <input
                                        class="toggle-checkbox"
                                        type="checkbox"
                                        onClick={toggleTheme}
                                    />
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
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className={`offcanvas-body ${darkMode ? "dark" : "light"}`}>
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item">
                                <Link to="/" className="nav-link" smooth={true} duration={500}>
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to="/about"
                                    className="nav-link"
                                    smooth={true}
                                    duration={500}
                                >
                                    About
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to="/skills"
                                    className="nav-link"
                                    smooth={true}
                                    duration={500}
                                >
                                    Skills
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to="/resume"
                                    className="nav-link"
                                    smooth={true}
                                    duration={500}
                                >
                                    Resume
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to="/contact"
                                    className="nav-link"
                                    smooth={true}
                                    duration={500}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div className="col">
                        <button
                            class={`navbar-toggler ${darkMode ? "dark" : "light"}`}
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation"
                        >
                            {/* <span class="navbar-toggler-icon"></span> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={25}
                                viewBox="0 0 448 512"
                            >
                                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                            </svg>
                            {/* <input type="checkbox" id="checkbox"/>
    <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label> */}
                        </button>
                    </div>
                    <div className="col" id="mode-out">
                        <div class="toggle-wrapper">
                            <input
                                class="toggle-checkbox"
                                type="checkbox"
                                onClick={toggleTheme}
                            />
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
        </nav>
    );
};

export default Navbar;
