/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mmsm': '360px',
      'phone': '400px',
      'msm': '435px',
      'five': '500px',
      'smm20': '620px',
      'sm': '640px',
      'sm10': '650px',
      'tab': '700px',
      'md': '768px',
      'xtab': '960px',
      'lg': '1024px',
      'mxl': '1335px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        ring: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' }
        }
      },
      animation: {
        ring: 'ring .5s ease-in-out',
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald',],
      'body': ['"Open Sans"',],
      'questrial': ['"Questrial"',],
      'roboto': ['"Roboto"',],
      'ibm': ['"IBM Plex Sans"',],
    },
    colors: {
      ...colors,
      'elitip-purple': {
        DEFAULT: '#6C348E',
      },
      'elitip-blue': {
        DEFAULT: '#0D155A',
      },
      'elitip-green': {
        DEFAULT: '#BCE143',
      },
    }
  },
  plugins: [],
}
