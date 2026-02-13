
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
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-4xl">
        <div className="glass-nav rounded-full px-3 sm:px-4 py-1.5 flex items-center justify-between shadow-xl">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center text-slate-900 font-extrabold shadow-sm group-hover:scale-105 transition-transform text-[10px] sm:text-xs">N</div>
            <span className="font-bold text-sm sm:text-base tracking-tighter uppercase text-slate-900 dark:text-white">NICHE</span>
          </Link>

          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-xs font-bold uppercase tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all hover:text-primary relative py-1 ${currentPath === link.path ? 'text-secondary dark:text-primary' : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                {link.name}
                {currentPath === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-slate-700 dark:text-slate-300"
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
            >
              <span className="material-symbols-outlined text-lg align-middle">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <Link
              to="/contact"
              className="bg-primary text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all hidden sm:block"
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
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
        <div
          className={`absolute top-0 right-0 w-3/4 h-full bg-white dark:bg-slate-900 shadow-2xl p-8 pt-24 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-bold ${currentPath === link.path ? 'text-primary' : 'text-slate-900 dark:text-white'
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
