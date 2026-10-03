import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './App.tsx', './components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
  // Classes built from data at runtime (e.g. `bg-${item.color}` in About.tsx)
  safelist: ['bg-primary', 'bg-secondary', 'text-primary', 'text-secondary'],
  theme: {
    extend: {
      colors: {
        primary: '#64d9b9',
        secondary: '#1863dc',
        'background-light': '#ecf3f5',
        'background-dark': '#0f172a',
        'card-light': '#ffffff',
        'card-dark': '#1e293b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '12px',
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [forms],
};
