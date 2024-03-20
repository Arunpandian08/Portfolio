import React, { useState, useEffect } from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Social from './Components/Social';
import { Link, Element } from 'react-scroll';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const isDarkModePreferred = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkModePreferred);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const themeClass = darkMode ? 'dark' : 'light';

  return (
    <div className={`app ${themeClass}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Social darkMode={darkMode} />
      <div className="container">
        <Link to="home" smooth={true} duration={100}></Link>
        <Link to="about" smooth={true} duration={100}></Link>
        <Link to="contact" smooth={true} duration={100}></Link>
        <Element name="home">
          <Home darkMode={darkMode} />
        </Element>
        <Element name="about">
          <About darkMode={darkMode} />
        </Element>
        <Element name="contact">
          <Contact darkMode={darkMode} />
        </Element>
      </div>
    </div>
  );
}

export default App;
