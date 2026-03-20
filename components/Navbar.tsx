
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      isDropdown: true,
      children: [
        { name: 'Company Profile', path: '/about' },
        { name: 'Patient Care', path: '/patient-care' },
      ]
    },
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

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed left-0 right-0 z-[60] transition-all duration-500 flex justify-center px-4 sm:px-6 md:px-0 ${isScrolled ? 'top-2 sm:top-4' : 'top-4 sm:top-10'}`}>
        
        {/* DESKTOP NAVBAR */}
        <div className="hidden md:flex items-center justify-center w-full">
          {/* Logo Container - Shrinks and disappears when scrolled */}
          <div className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center ${isScrolled ? 'max-w-0 opacity-0' : 'max-w-[400px] opacity-100 mr-10'}`}>
            <Link to="/" className="block group w-max shrink-0">
              <img src="/images/Logo1.png" alt="Niche Renal Services" className="h-20 md:h-28 w-auto group-hover:scale-105 transition-transform drop-shadow-xl" />
            </Link>
          </div>

          <nav className="glass-nav rounded-full px-10 lg:px-12 py-1.5 flex items-center justify-center gap-10 lg:gap-14 shadow-xl select-none">
            <div className="flex items-center gap-8 lg:gap-12 text-sm font-bold uppercase tracking-widest">
              {navLinks.map((link) => (
                link.isDropdown ? (
                  <div key={link.name} className="relative group/dropdown py-4 cursor-pointer whitespace-nowrap">
                    <span className="text-slate-600 dark:text-slate-300 transition-all hover:text-primary flex items-center gap-1 relative">
                      {link.name}
                      <span className="material-symbols-outlined text-sm">expand_more</span>
                      {link.children.some(c => c.path === currentPath) && (
                        <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                      )}
                    </span>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl p-3 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col gap-1 translate-y-2 group-hover/dropdown:translate-y-0">
                      {link.children.map(child => (
                        <Link key={child.path} to={child.path} className={`px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors block text-sm ${currentPath === child.path ? 'text-primary bg-primary/5' : 'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`transition-all hover:text-primary relative py-4 whitespace-nowrap ${currentPath === link.path ? 'text-secondary dark:text-primary' : 'text-slate-600 dark:text-slate-300'
                      }`}
                  >
                    {link.name}
                    {currentPath === link.path && (
                      <span className="absolute bottom-1.5 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                    )}
                  </Link>
                )
              ))}
            </div>

            <Link
              to="/contact"
              className="bg-primary text-slate-900 px-6 py-2.5 rounded-full text-xs font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all whitespace-nowrap hidden lg:block"
            >
              Book Appointment
            </Link>
          </nav>
        </div>

        {/* MOBILE NAVBAR */}
        <div className="md:hidden w-full flex items-center justify-between px-2 pt-2">
          <div className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center ${isScrolled ? 'max-w-0 opacity-0' : 'max-w-[300px] opacity-100'}`}>
            <Link to="/" className="block group shrink-0">
              <img src="/images/Logo1.png" alt="Niche Renal Services" className="h-20 w-auto drop-shadow-xl transition-transform active:scale-95" />
            </Link>
          </div>
          <button
            className="p-3 text-slate-800 dark:text-white bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-black/20 shadow-lg rounded-2xl transition-all active:scale-95 flex items-center justify-center shrink-0 ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl leading-none">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
        <div
          className={`absolute top-0 right-0 w-3/4 h-full bg-white dark:bg-slate-900 shadow-2xl p-8 pt-24 transition-transform duration-500 ease-in-out overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div key={link.name} className="flex flex-col gap-4">
                  <span className="text-xl font-bold text-slate-900/50 dark:text-white/50 uppercase tracking-widest text-xs">{link.name}</span>
                  <div className="flex flex-col gap-4 pl-4 border-l-2 border-primary/20">
                    {link.children.map(child => (
                      <Link key={child.path} to={child.path} className={`text-2xl font-bold ${currentPath === child.path ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-bold ${currentPath === link.path ? 'text-primary' : 'text-slate-900 dark:text-white'
                    }`}
                >
                  {link.name}
                </Link>
              )
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
