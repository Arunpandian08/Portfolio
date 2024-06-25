import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './Utilities/Loader/Loader';
const BackgroundAnimation = lazy(() => import('./Animation/BackgroundAnimation'));
const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const Home = lazy(() => import('./Page/Home/Home'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Simulate an async action like fetching data or loading resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
      <>
        {isLoading ? (
        <Loader />
        ) : (
          <Router>
            <Suspense fallback={<Loader />}>
              <BackgroundAnimation />
              <div>
                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<div>404 Page Not Found</div>} />
              </Routes>
            </Suspense>
          </Router>
        )}
      </>
  );
};

export default App;
