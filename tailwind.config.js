/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
     /*  'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6', */
      

      /* Primary */
      'Moderate-blue': 'hsl(238, 40%, 52%)',
      'Soft-Red': 'hsl(358, 79%, 66%)',
      'Light-grayish-blue': 'hsl(239, 57%, 85%)',
      'Pale-red': 'hsl(357, 100%, 86%)',

      
      /* Neutral */
      'Dark-blue': 'hsl(212, 24%, 26%)',
      'Grayish-Blue': 'hsl(211, 10%, 45%)',
      'Light-gray': 'hsl(223, 19%, 93%)',
      'Very-light-gray': 'hsl(228, 33%, 97%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    },
  },
  plugins: [],

}

