
import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';

// Secondary pages load as separate chunks so the first visit only downloads the home page.
const loadAbout = () => import('./pages/About');
const loadServices = () => import('./pages/Services');
const loadContact = () => import('./pages/Contact');
const loadPatientCare = () => import('./pages/PatientCare');

const About = lazy(loadAbout);
const Services = lazy(loadServices);
const Contact = lazy(loadContact);
const PatientCare = lazy(loadPatientCare);

const App: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Fetch the other pages in the background once the current one has settled,
  // so navigating between pages stays instant.
  useEffect(() => {
    const prefetch = () => {
      loadAbout();
      loadServices();
      loadContact();
      loadPatientCare();
    };
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(prefetch, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/patient-care" element={<PatientCare />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;
