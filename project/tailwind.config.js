/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#64ffda',
          dark: '#0a192f',
        },
        secondary: {
          light: '#8892b0',
          dark: '#ccd6f6',
        }
      },
    },
  },
  plugins: [],
};