const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme-blue': '#00C2FF',
        'theme-gray': '#F0FBFF',
      },
    },
    fontFamily: {
      'sans': ['Raleway', defaultTheme.fontFamily.sans],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
