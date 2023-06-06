/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // screens: {
    //   lg: { max: '1280px' },
    // },
    extend: {
      colors: {
        main: '#fd8421',
        black: '#4D4D4D',
      },
    },
  },
  plugins: [],
};
