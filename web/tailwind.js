const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
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
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
