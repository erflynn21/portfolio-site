const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'theme-blue': '#00C2FF',
        gray: colors.warmGray,
        'theme-dark-blue': '#008CC6',
      },
    },
    fontFamily: {
      'sans': ['Raleway', defaultTheme.fontFamily.sans],
    }
  },

  plugins: [require('daisyui')],
};

module.exports = config;
