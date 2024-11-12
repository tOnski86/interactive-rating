/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      orange: 'hsl(25, 97%, 53%)',
      white: 'hsl(0, 0%, 100%)',
      grey: 'hsl(217, 12%, 63%)',
      blue: 'hsl(213, 19%, 18%)',
      black: 'hsl(216, 12%, 8%)',
    },
    fontFamily: {
      overpass: ['Overpass', 'sans-serif'],
    },
  },
  plugins: [],
};

/*
- Mobile: 375px
- Desktop: 1440px

- Family: [Overpass](https://fonts.google.com/specimen/Overpass)
- Weights: 400, 700
*/
