const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      'sans': ['Raleway', defaultTheme.fontFamily.sans],
    }
  },

  daisyui: {
    themes: [
      "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
      {
        'light': {
          ...require('daisyui/src/colors/themes')["[data-theme=light]"],
          primary: '#00C2FF',
        },
        'dark': {
          ...require('daisyui/src/colors/themes')["[data-theme=dark]"],
          primary: '#00C2FF',
        },
        
      }
    ],
  },

  plugins: [require('daisyui')],
};

module.exports = config;
