
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
