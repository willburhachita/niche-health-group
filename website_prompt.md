# Website Build Prompt

I want you to build a website based on the following existing codebase. Please use this content to generate the UI and logic.

## Project Overview
This is a React application using Vite and Tailwind CSS. It is a healthcare website for "Niche Healthcare Group".

## File Contents

### index.html
```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Niche Healthcare Limited — Renal Care & Medical Supplies | Lusaka, Zambia</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet" />
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,container-queries"></script>
    <script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#64d9b9",
                        secondary: "#1863dc",
                        "background-light": "#ecf3f5",
                        "background-dark": "#0f172a",
                        "card-light": "#ffffff",
                        "card-dark": "#1e293b",
                    },
                    fontFamily: {
                        sans: ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "12px",
                        '4xl': '2rem',
                        '5xl': '3rem',
                    },
                },
            },
        };
    </script>
    <style type="text/tailwindcss">
        @layer utilities {
            .glass-nav {
                background: rgba(255, 255, 255, 0.7);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.3);
            }
            .dark .glass-nav {
                background: rgba(15, 23, 42, 0.8);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .glass-card {
                background: rgba(255, 255, 255, 0.4);
                backdrop-filter: blur(8px);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            .dark .glass-card {
                background: rgba(30, 41, 59, 0.4);
                border: 1px solid rgba(255, 255, 255, 0.05);
            }
            .hero-gradient {
                background: linear-gradient(to bottom,
                  rgba(15, 23, 42, 0.7) 0%,
                  rgba(15, 23, 42, 0.65) 50%,
                  rgba(15, 23, 42, 0.55) 65%,
                  rgba(15, 23, 42, 0.4) 75%,
                  rgba(15, 23, 42, 0.2) 85%,
                  rgba(15, 23, 42, 0.05) 93%,
                  #ecf3f5 100%
                ), url('/images/hero_background.png');
                background-size: cover;
                background-position: center;
            }
            .dark .hero-gradient {
                background: linear-gradient(to bottom,
                  rgba(15, 23, 42, 0.7) 0%,
                  rgba(15, 23, 42, 0.65) 50%,
                  rgba(15, 23, 42, 0.55) 65%,
                  rgba(15, 23, 42, 0.4) 75%,
                  rgba(15, 23, 42, 0.2) 85%,
                  rgba(15, 23, 42, 0.05) 93%,
                  #0f172a 100%
                ), url('/images/hero_background.png');
                background-size: cover;
                background-position: center;
            }
        }
    </style>
    <script type="importmap">
{
  "imports": {
    "react/": "https://esm.sh/react@^19.2.4/",
    "react": "https://esm.sh/react@^19.2.4",
    "react-dom/": "https://esm.sh/react-dom@^19.2.4/",
    "react-router-dom": "https://esm.sh/react-router-dom@^7.13.0"
  }
}
</script>
    <link rel="stylesheet" href="/index.css">
</head>

<body
    class="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 transition-colors duration-300 antialiased">
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
</body>

</html>
```

### App.tsx
```tsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { pathname } = useLocation();

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;
```

### Components

#### Navbar.tsx
```tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-6xl">
        <div className="glass-nav rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-xl">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-primary rounded-xl flex items-center justify-center text-slate-900 font-extrabold shadow-sm group-hover:scale-105 transition-transform">N</div>
            <span className="font-bold text-lg sm:text-xl tracking-tighter uppercase text-slate-900 dark:text-white">NICHE</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-bold uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all hover:text-primary relative py-1 ${
                  currentPath === link.path ? 'text-secondary dark:text-primary' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.name}
                {currentPath === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1 sm:gap-3">
            <button 
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-slate-700 dark:text-slate-300"
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
            >
              <span className="material-symbols-outlined text-2xl align-middle">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <Link 
              to="/contact" 
              className="bg-primary text-slate-900 px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all hidden sm:block"
            >
              Book Appointment
            </Link>
            <button 
              className="md:hidden p-2 text-slate-700 dark:text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-3xl align-middle">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
        <div 
          className={`absolute top-0 right-0 w-3/4 h-full bg-white dark:bg-slate-900 shadow-2xl p-8 pt-24 transition-transform duration-500 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-bold ${
                  currentPath === link.path ? 'text-primary' : 'text-slate-900 dark:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-slate-100 dark:bg-slate-800 my-4"></div>
            <Link 
              to="/contact" 
              className="bg-primary text-slate-900 px-8 py-4 rounded-2xl font-bold text-center text-lg"
            >
              Book Appointment
            </Link>
            <div className="mt-auto pb-10">
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Contact us in Perth</p>
              <a href="tel:+61426170805" className="text-lg font-bold text-slate-900 dark:text-white">+61 426 170 805</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
```

#### Footer.tsx
```tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-slate-900 font-black text-xl">N</div>
              <span className="font-bold text-2xl tracking-tight uppercase">NICHE HEALTHCARE LIMITED</span>
            </div>
            <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
              A Zambian-registered healthcare company committed to transforming kidney care through exceptional dialysis services, reliable medical consumables supply, and professional clinical training.
            </p>
            <a href="mailto:info@nichehealthcaregroup.com" className="text-primary hover:text-primary/80 transition-colors text-sm font-medium mb-6 inline-block">info@nichehealthcaregroup.com</a>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 class="font-bold text-lg mb-8">Navigation</h4>
            <ul class="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-lg mb-8">Newsletter</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  className="w-full bg-slate-900 border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-primary focus:border-primary"
                  placeholder="Email address"
                />
                <button className="absolute right-2 top-2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-slate-900">
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
              <label className="flex items-start gap-3 text-xs text-slate-500 cursor-pointer">
                <input type="checkbox" className="mt-0.5 rounded border-slate-800 bg-slate-900 text-primary focus:ring-primary" required />
                <span>I authorize the use of the information entered for newsletter updates.</span>
              </label>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <p>© 2025 Niche Healthcare Limited. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

#### CookieConsent.tsx
```tsx
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[60] max-w-sm w-[calc(100%-48px)]">
      <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-700">
        <h5 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">Privacy Preference</h5>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          We use essential cookies to provide a premium healthcare portal experience and track service excellence.
        </p>
        <div className="flex gap-3">
          <button 
            onClick={handleAccept}
            className="flex-1 bg-primary text-slate-900 text-sm font-bold py-3.5 rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-primary/10"
          >
            Accept All
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold py-3.5 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
```

### Pages

#### Home.tsx
```tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 z-0">
          <img
            alt="Healthcare Professional"
            className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
            src="/images/hero_background.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.2em] uppercase text-xs mb-8 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              Global Standards, Local Impact
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-10 leading-[1] tracking-tighter">
              Bridging <span className="text-primary italic font-serif">International</span> <br />Healthcare Needs
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-2xl font-light">
              Niche Healthcare Limited delivers exceptional, patient-centred dialysis services, reliable medical consumables supply, and professional clinical training from Lusaka, Zambia.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link to="/services" className="bg-primary text-slate-900 px-12 py-5 rounded-full font-black text-lg hover:shadow-2xl hover:-translate-y-1 transition-all w-full sm:w-auto text-center">
                Explore Our Capabilities
              </Link>
              <Link to="/services" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto text-center">
                Clinical Training
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Additional sections in Home.tsx content... (omitted for brevity, please assume full file content) */}
      {/* Capabilities Section */}
      <section className="py-32 md:py-48 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight">Our Capabilities</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                A comprehensive suite of healthcare solutions tailored to improve patient outcomes and operational excellence in diverse environments.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-2">
              <div className="w-16 h-1 bg-primary rounded-full"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-slate-400">Excellence in Action</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="md:col-span-8 group relative rounded-[3.5rem] overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="relative h-80 lg:h-full overflow-hidden">
                  <img
                    src="/images/renal_services.png"
                    alt="Niche Renal Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent lg:hidden"></div>
                </div>
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-6 block">Niche Renal Services</span>
                  <h3 className="text-3xl font-bold mb-8 leading-tight text-slate-900 dark:text-white">Comprehensive Dialysis & Renal Care</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-10">
                    NHL delivers tailored, high-quality renal care solutions for patients living with chronic kidney disease (CKD), including comprehensive dialysis treatments, hypertension management, and chronic medical conditions management.
                  </p>
                  <div className="flex items-center gap-10">
                    <div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-white">500+</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Certified Graduates</div>
                    </div>
                    <div className="w-px h-12 bg-slate-200 dark:bg-slate-800"></div>
                    <div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-white">12</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Training Tracks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 space-y-8 h-full flex flex-col">
              <div className="flex-1 group bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800">
                <div className="h-56 overflow-hidden">
                  <img src="/images/wholesale_pharmacy_1770889446699.png" alt="Wholesale Pharmacy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Wholesale Pharmacy</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">Licensed wholesale pharmacy specialising in renal, dialysis consumables, allied health products and prescription medicines.</p>
                </div>
              </div>
              <div className="flex-1 group bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800">
                <div className="h-56 overflow-hidden">
                  <img src="/images/clinical_training_1770889813333.png" alt="Clinical Training" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Clinical Training</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">Comprehensive resuscitation clinical courses including BLS, IRAD, and Advanced Life Support certifications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-40 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative">
                <img src="/images/headquarters.png" alt="NHL Headquarters" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-2xl max-w-xs hidden xl:block border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">format_quote</span>
                <p className="italic text-base text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  "Committed to transforming kidney care in Zambia by delivering exceptional, patient-centred dialysis services."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-1 bg-primary rounded-full"></div>
                  <p className="font-bold text-slate-900 dark:text-white tracking-widest uppercase text-xs">Board of Directors</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-secondary dark:text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Driven by Integrity</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-tight">Guided by Compassion, Defined by Excellence</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-light">
                NHL is more than just a provider; we are partners in health. Headquartered in Woodlands, Lusaka, with a sister company in Perth, Western Australia, we deliver unparalleled renal care and medical standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">Accredited</h5>
                    <p className="text-sm text-slate-500">Licensed by international regulatory boards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-3xl">language</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">Global Reach</h5>
                    <p className="text-sm text-slate-500">Bridging Perth and Sub-Saharan Africa.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="inline-block px-12 py-5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-black rounded-full hover:shadow-2xl transition-all text-lg tracking-tight">
                Learn More About Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-secondary text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready for Exceptional Renal Care?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg font-light">
            Whether you need dialysis services, certified clinical training, or reliable medical consumables, our team of experts is ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-primary text-slate-900 px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl shadow-primary/20">
              Send Inquiry
            </Link>
            <a href="tel:+61426170805" className="border border-white/20 backdrop-blur-md px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              <span className="material-symbols-outlined">call</span> Talk to an Advisor
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-white/5 -skew-x-12 -translate-x-1/2"></div>
      </section>
    </div>
  );
};

export default Home;
```

#### About.tsx
```tsx
import React from 'react';

const About: React.FC = () => {
  const timelineData = [
    { year: '2022', title: 'Foundation', text: 'Establishment of Niche Healthcare Limited in Lusaka, Zambia, with a vision to transform kidney care.', icon: 'event', color: 'primary' },
    { year: '2024', title: 'Fully Operational', text: 'Niche Renal Services and Niche Wholesale Pharmacy become fully operational from Woodlands, Lusaka.', icon: 'public', color: 'secondary' },
    { year: '2025', title: 'Clinical Training Launch', text: 'Launch of comprehensive resuscitation clinical courses — BLS, IRAD, and Advanced Life Support certifications.', icon: 'trending_up', color: 'primary' },
  ];

  return (
    <div>
      {/* Hero */}
      <header className="hero-gradient pt-48 pb-56 text-center text-white relative">

        <div className="container mx-auto px-6 relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Story & Excellence</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Our Mission & <span className="text-primary">Vision</span></h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            Niche Healthcare Limited (NHL) is a Zambian-registered healthcare company headquartered in Woodlands, Lusaka. Led by two Zambian co-directors, NHL is committed to transforming kidney care through compassion, innovation, and integrity.
          </p>
        </div>
      </header>

      {/* Cards */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .float-card { animation: float 4s ease-in-out infinite; }
        .float-card:nth-child(2) { animation-delay: 0.5s; }
        .float-card:nth-child(3) { animation-delay: 1s; }
      `}</style>
      <section className="pt-28 pb-24 relative z-20">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="float-card glass-card p-10 rounded-[40px] shadow-2xl border border-slate-200 dark:border-slate-700">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">flag</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Niche Healthcare Limited is committed to transforming kidney care in Zambia by delivering exceptional, patient-centred dialysis services and ensuring the reliable supply of medical consumables. Guided by compassion, innovation, and integrity, we aim to set new benchmarks in healthcare excellence.
              </p>
            </div>
            <div className="float-card glass-card p-10 rounded-[40px] shadow-2xl border border-slate-200 dark:border-slate-700">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-secondary text-4xl">visibility</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To become the leading provider of renal care and medical consumables in Zambia and the wider region, delivering scalable, technology-driven solutions that generate sustainable returns while transforming patient outcomes.
              </p>
            </div>
            <div className="float-card glass-card p-10 rounded-[40px] shadow-2xl border border-slate-200 dark:border-slate-700">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">favorite</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Compassion, Integrity, and Quality. We put individuals above profits, maintaining accountability as leaders in global healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-24">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Milestones</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Our Journey</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
            {timelineData.map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active py-8">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-${item.color} text-slate-900 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
                  <span className={`material-symbols-outlined text-xl ${item.color === 'secondary' ? 'text-white' : ''}`}>{item.icon}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-[2.5rem] bg-slate-50 dark:bg-card-dark border border-slate-100 dark:border-slate-800 shadow-lg">
                  <div className="flex items-center justify-between space-x-2 mb-2">
                    <div className="font-bold text-xl text-slate-900 dark:text-white">{item.title}</div>
                    <time className={`font-black text-${item.color}`}>{item.year}</time>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-lg">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold">Headquartered in Zambia, Connected Globally</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img src="/images/headquarters.png" alt="Lusaka HQ" className="rounded-[3rem] shadow-2xl h-[500px] w-full object-cover" />
              <div className="absolute -top-6 -left-6 bg-primary text-slate-900 p-8 rounded-[2rem] font-bold shadow-xl">Zambia HQ</div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Woodlands, Lusaka — Headquarters</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Headquartered in Woodlands, Lusaka, Niche Healthcare Limited operates Niche Renal Services (NRS) and Niche Wholesale Pharmacy. Our sister company, Niche Healthcare Group PTY Limited, operates from Perth, Western Australia, focusing on healthcare and allied health consumables/products export.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-lg">
                  <span className="material-symbols-outlined text-primary">verified</span> Niche Renal Services — Comprehensive Dialysis & Chronic Care
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <span className="material-symbols-outlined text-primary">verified</span> Niche Wholesale Pharmacy — Licensed Medical Consumables Supply
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <span className="material-symbols-outlined text-primary">verified</span> Professional Clinical Training — BLS, IRAD & ALS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
```

#### Services.tsx
```tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-32">
      <header className="py-24 text-center">
        <div className="container mx-auto px-6">
          <span className="text-secondary dark:text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Specializations</span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Products & Services</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Niche Healthcare Limited operates through specialised divisions — Niche Renal Services, Niche Wholesale Pharmacy, and our Clinical Training Centre — to deliver comprehensive healthcare solutions.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-24 pb-32">

        {/* ==================== SERVICE 1: NICHE RENAL SERVICES ==================== */}
        <section className="mb-40 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-primary text-5xl">water_drop</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">Niche Renal Services (NRS)</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              The name "Niche" embodies the company's dedication to serving a specialised segment of the healthcare sector — patients living with chronic kidney disease (CKD). NHL delivers tailored, high-quality renal care solutions while operating at the intersection of advanced medical service delivery and healthcare supply.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Our core focus includes comprehensive dialysis treatments, hypertension management, and other chronic medical conditions management. Distinguishing features include a patient-centred philosophy, rigorous quality assurance systems, and the integration of telehealth and digital health innovations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-secondary text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2">
                Book Appointment <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="aspect-video lg:aspect-[4/3] w-full rounded-[3.5rem] overflow-hidden shadow-2xl relative">
              <img src="/images/renal_services.png" alt="Niche Renal Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </section>

        {/* ==================== SERVICE 2: NICHE WHOLESALE PHARMACY ==================== */}
        <section className="mb-40 flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="w-20 h-20 bg-secondary/20 rounded-3xl flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-secondary text-5xl">inventory_2</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">Niche Wholesale Pharmacy</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Niche Wholesale Pharmacy is a licensed wholesale pharmacy based in Lusaka, Zambia, specialising in the supply of renal and dialysis consumables, allied health products, and categorised groups of prescription medicines. We support hospitals, dialysis centres, and renal clinics with reliable, quality-assured products essential for uninterrupted renal replacement therapy.
            </p>

            {/* Why Choose Us */}
            <h3 className="text-2xl font-bold mb-5 text-slate-900 dark:text-white">Why Choose Us</h3>
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                Licensed and regulated wholesale pharmacy
              </li>
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                Extensive client needs assessments with an evidence-based approach
              </li>
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                Deep understanding of the Southern African landscape and culture
              </li>
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                Quality-assured renal, dialysis consumables, allied health products and medicines
              </li>
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                Competitive pricing with reliable and timely supply
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-secondary text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2">
                Request Supply <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="aspect-video lg:aspect-[4/3] w-full rounded-[3.5rem] overflow-hidden shadow-2xl relative">
              <img src="/images/wholesale_pharmacy_1770889446699.png" alt="Niche Wholesale Pharmacy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>

            {/* Who We Serve + Product Range - floating card */}
            <div className="absolute -bottom-16 -left-8 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-2xl max-w-sm hidden xl:block border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">Who We Serve</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-5">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Public and private hospitals</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>All dialysis centres and specialist renal clinics</li>
              </ul>
              <h4 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">Product Range</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Dialysis & renal consumables</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Dialysis access devices (permanent & temporal catheters)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Allied health products & nutritional supplies</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>All medicines</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mobile-only Who We Serve / Product Range */}
        <div className="xl:hidden mb-24 -mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Who We Serve</h4>
              <ul className="text-slate-600 dark:text-slate-400 space-y-3">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">local_hospital</span>Public and private hospitals</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">medical_services</span>All dialysis centres and specialist renal clinics</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Product Range</h4>
              <ul className="text-slate-600 dark:text-slate-400 space-y-3">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary"></span>Dialysis & renal consumables</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary"></span>Dialysis access devices</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary"></span>Allied health products</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary"></span>All medicines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==================== SERVICE 3: CLINICAL TRAINING ==================== */}
        <section className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white overflow-hidden relative mb-40">
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start gap-16 mb-20">
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary text-4xl">school</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Clinical Training Centre</h2>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  Comprehensive resuscitation clinical courses empowering the next generation of healthcare providers through certified, intensive training modules.
                </p>
                <div className="flex items-center gap-4 text-primary text-sm font-bold mb-6">
                  <span className="material-symbols-outlined">mail</span>
                  <a href="mailto:info@nichehealthcaregroup.com" className="hover:underline">info@nichehealthcaregroup.com</a>
                </div>
                <Link to="/contact" className="inline-block bg-primary text-slate-900 px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                  Enquire About Training
                </Link>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl relative group h-[500px]">
                  <img src="/images/clinical_training_1770889813333.png" alt="Clinical Training" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-12">
                    <div>
                      <span className="bg-primary/90 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full mb-4 inline-block">ACCREDITED</span>
                      <h4 className="text-3xl font-bold">Clinical Excellence Hub</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Individual Course Details */}
            <div className="space-y-12">
              {/* BLS */}
              <div className="bg-white/5 rounded-[2.5rem] p-10 lg:p-14 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                  <h3 className="text-2xl lg:text-3xl font-bold">Basic Life Support (BLS)</h3>
                  <span className="bg-primary/20 text-primary text-xs font-bold px-4 py-1.5 rounded-full ml-auto hidden sm:block">2-HOUR COURSE</span>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  The BLS training will provide you with skills and knowledge required to respond to life-threatening emergencies in a variety of setups. This two-hour beginner's course will outline the chain of survival, DRSABCD action plan and will equip you with necessary skills on how to use an automated external defibrillator. This multidisciplinary course is specifically tailored to meet the needs of all healthcare professionals. At the end of the training, you will be competent in cardiopulmonary resuscitation.
                </p>
                <p className="text-slate-400 text-sm italic">Recommended for everyone working in a clinical setup who comes in contact with patients.</p>
              </div>

              {/* IRAD */}
              <div className="bg-white/5 rounded-[2.5rem] p-10 lg:p-14 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                  <h3 className="text-2xl lg:text-3xl font-bold">Identification, Prevention and Responding to Acute Deterioration (IRAD)</h3>
                  <span className="bg-primary/20 text-primary text-xs font-bold px-4 py-1.5 rounded-full ml-auto hidden sm:block">2-DAY COURSE</span>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  This two-day course provides training in identification of acute clinical deterioration, care of the deteriorated patient and management. The course outcomes for candidates is to be able to describe a systematic approach to assessing acutely ill patients. The IRAD course is a blend of lectures, drills, problem-based learning and simulated learning that embed the ABCDE approach to assessment and management of the patient with deteriorating illness.
                </p>
                <p className="text-slate-400 text-sm italic">Aimed at doctors, nurses, clinical officers and allied healthcare professionals. Promotes teamwork and multi-professional approach to patient care.</p>
              </div>

              {/* ALS */}
              <div className="bg-white/5 rounded-[2.5rem] p-10 lg:p-14 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                  <h3 className="text-2xl lg:text-3xl font-bold">Advanced Life Support (ALS)</h3>
                  <span className="bg-primary/20 text-primary text-xs font-bold px-4 py-1.5 rounded-full ml-auto hidden sm:block">3-DAY COURSE</span>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  This course will provide you with advanced skills and knowledge required to manage the deteriorating patient, cardiac arrests and other medical emergencies. The training covers resuscitation skills and development of emergency team leadership abilities. Content includes assessment of the compromised patient using ABCDE, review of BLS, advanced airway management, recognising and managing life-threatening arrhythmias, defibrillation, transcutaneous pacing, advanced cardiac arrest algorithms, and emergency drugs.
                </p>
                <p className="text-slate-400 text-sm italic">Designed for experienced clinicians — doctors, clinical officers, nurses, paramedics, and physiotherapists. We recommend completing BLS and IRAD before attempting ALS.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-400 text-lg mb-6">Call or email our team to discuss the cost and booking arrangements</p>
              <a href="mailto:info@nichehealthcaregroup.com" className="inline-flex items-center gap-3 bg-primary text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all">
                <span className="material-symbols-outlined">mail</span> info@nichehealthcaregroup.com
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        </section>

        {/* ==================== CASE STUDIES ==================== */}
        <section className="mb-20">
          <div className="text-center mb-20">
            <span className="text-secondary dark:text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Real Impact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Case Studies</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-secondary to-secondary/80 p-10">
                <span className="bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 inline-block backdrop-blur-sm">CASE STUDY 1</span>
                <h3 className="text-2xl font-bold text-white mb-2">Observership & Partnership</h3>
                <p className="text-white/70">Livingstone General Hospital Attachment</p>
              </div>
              <div className="p-10">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Doctors and nurses from Livingstone General Hospital participated in a one-week attachment at Niche Renal Service to observe and learn from our multidisciplinary team.
                </p>
                <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Focus Areas Covered</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-primary mt-0.5 text-lg">check_circle</span>
                    Infection prevention in dialysis patients
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-primary mt-0.5 text-lg">check_circle</span>
                    Critical thinking skills for junior staff
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-primary mt-0.5 text-lg">check_circle</span>
                    Identification and prevention of clinical deterioration in dialysis patients
                  </li>
                </ul>
                <div className="bg-primary/10 rounded-2xl p-6">
                  <h5 className="font-bold text-sm uppercase tracking-widest text-primary mb-2">Impact</h5>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    This observership strengthened collaboration between institutions, enhanced staff competence, and reinforced a culture of safety and proactive patient care.
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-primary to-primary/80 p-10">
                <span className="bg-white/20 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full mb-4 inline-block backdrop-blur-sm">CASE STUDY 2</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Referral for Maintenance Dialysis</h3>
                <p className="text-slate-900/70">Comorbid Patient — Mr. JF</p>
              </div>
              <div className="p-10">
                <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Patient Profile</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Mr. JF, a comorbid patient newly commenced on dialysis, referred from a tertiary hospital.
                </p>
                <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Intervention</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-primary mt-0.5 text-lg">check_circle</span>
                    Comprehensive health assessment conducted by Niche Renal Service doctors
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-primary mt-0.5 text-lg">check_circle</span>
                    Identification and active management of ongoing medical issues
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-primary mt-0.5 text-lg">check_circle</span>
                    Tailored dialysis care integrated with broader medical management
                  </li>
                </ul>
                <div className="bg-primary/10 rounded-2xl p-6">
                  <h5 className="font-bold text-sm uppercase tracking-widest text-primary mb-2">Outcome</h5>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Marked improvement in quality of life, demonstrating the value of holistic patient assessment and multidisciplinary care in dialysis management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Services;
```

#### Contact.tsx
```tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 bg-white dark:bg-slate-950">
      <header className="py-32 text-center hero-pattern overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-secondary dark:text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Contact <span className="text-primary italic">Niche</span> Group
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Reach out to our teams in Lusaka or Perth for dialysis services, medical supplies, clinical training, or corporate inquiries.
          </p>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"></div>
      </header>

      <section className="py-24 container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Australia */}
          <div className="bg-slate-50 dark:bg-card-dark rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 transition-all hover:shadow-2xl">
            <div className="h-64 relative flex items-center justify-center">
              <img
                src="/images/wholesale_pharmacy_1770889446699.png"
                alt="Australia Location"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 text-center">
                <span className="material-symbols-outlined text-6xl text-primary mb-3">location_on</span>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Perth, Australia</h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium">Sister Company — Healthcare Exports</p>
              </div>
            </div>
            <div className="p-10 space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">map</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Address</h4>
                  <p className="text-slate-600 dark:text-slate-400">14 Vision Way, Southern River, WA 6110, Australia</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400">+61 426 170 805</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Email</h4>
                  <a href="mailto:info@nichehealthcaregroup.com" className="text-primary hover:underline">info@nichehealthcaregroup.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Zambia */}
          <div className="bg-slate-50 dark:bg-card-dark rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 transition-all hover:shadow-2xl">
            <div className="h-64 relative flex items-center justify-center">
              <img
                src="/images/headquarters.png"
                alt="Zambia Location"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 text-center">
                <span className="material-symbols-outlined text-6xl text-primary mb-3">public</span>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Lusaka, Zambia</h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium">Headquarters — Renal Services, Pharmacy & Training</p>
              </div>
            </div>
            <div className="p-10 space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">map</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Address</h4>
                  <p className="text-slate-600 dark:text-slate-400">Plot 4532, Cairo Road, Lusaka, Zambia</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400">+260 779 156334</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Email</h4>
                  <a href="mailto:info@nichehealthcaregroup.com" className="text-primary hover:underline">info@nichehealthcaregroup.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-20 rounded-[4rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Send us a Message</h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-light">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500 px-1">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-lg" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500 px-1">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-lg" placeholder="john@example.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500 px-1">Subject</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-lg">
                    <option>General Inquiry</option>
                    <option>Dialysis / Renal Services</option>
                    <option>Wholesale Pharmacy</option>
                    <option>Clinical Training (BLS/IRAD/ALS)</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500 px-1">Preferred Location</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-lg">
                    <option>Perth, Australia</option>
                    <option>Lusaka, Zambia</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500 px-1">Message</label>
                  <textarea rows={5} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-lg" placeholder="How can we help you today?"></textarea>
                </div>
                <div className="md:col-span-2 pt-6">
                  <button className="w-full bg-primary text-slate-900 font-black py-5 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all text-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined">send</span> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-24 text-center">
          <div className="bg-white/10 p-12 lg:p-20 rounded-[4rem] backdrop-blur-xl border border-white/20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to consult with experts?</h2>
              <p className="text-white/70 text-xl font-light">Our medical teams are available for strategy sessions across timezones.</p>
            </div>
            <button className="bg-primary text-slate-900 px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all whitespace-nowrap">
              Schedule Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
```
