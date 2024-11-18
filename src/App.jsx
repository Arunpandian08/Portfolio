import React, { lazy, Suspense, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './Utilities/Loader/Loader';
import Error from './Pages/Error/Error';
import {useLenisScroll} from './Utilities/SmoothScroll/useLenisScroll';

const BackgroundAnimation = lazy(() => import('./Utilities/Animation/BackgroundAnimation'));
const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const Home = lazy(() => import('./Pages/Home/Home'));

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenisScroll();

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <BackgroundAnimation />
      
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} lenis={lenis} />
       
        <main>
          <Routes>
            <Route path="/" element={<Home lenis={lenis} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Suspense>
    </Router>
  );
};

export default App;