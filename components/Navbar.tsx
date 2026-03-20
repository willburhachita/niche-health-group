
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
      <header className={`fixed left-1/2 -translate-x-1/2 z-[60] w-[95%] sm:w-auto transition-all duration-500 flex items-center justify-center ${isScrolled ? 'top-4' : 'top-6 sm:top-10'}`}>
        
        {/* Logo Container - Shrinks and disappears when scrolled */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center ${isScrolled ? 'max-w-0 opacity-0' : 'max-w-[350px] opacity-100 mr-6 md:mr-10'}`}>
          <Link to="/" className="block group w-max shrink-0">
            <img src="/images/Logo1.png" alt="Niche Renal Services" className="h-16 sm:h-20 md:h-28 w-auto group-hover:scale-105 transition-transform drop-shadow-xl" />
          </Link>
        </div>

        {/* Navigation bar that stays fixed */}
        <nav className="glass-nav rounded-full px-5 md:px-12 py-1 md:py-1.5 flex items-center justify-between md:justify-center gap-6 md:gap-14 lg:gap-20 shadow-xl w-full max-w-[95vw] md:w-auto mt-2">
          <div className="hidden md:flex items-center gap-10 lg:gap-16 text-sm font-bold uppercase tracking-widest">
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

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="bg-primary text-slate-900 px-5 py-1.5 md:py-2 rounded-full text-xs font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all hidden sm:block whitespace-nowrap"
            >
              Book Appointment
            </Link>
            <button
              className="md:hidden p-1 text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-xl align-middle">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>
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
