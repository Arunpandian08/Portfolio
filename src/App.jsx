import React, { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';

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
    <Router>
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About />} />
          {/* Add routes for other components */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;
