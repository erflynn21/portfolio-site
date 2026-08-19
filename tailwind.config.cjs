const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      'sans': ['Space Grotesk', defaultTheme.fontFamily.sans],
      'serif': ['Instrument Serif', defaultTheme.fontFamily.serif],
      'mono': ['JetBrains Mono', defaultTheme.fontFamily.mono],
    }
  },

  daisyui: {
    themes: [
      {
        'portfolio-dark': {
          "primary": "#6ea8ff",
          "primary-content": "#06080d",
          "secondary": "#6ea8ff",
          "secondary-content": "#06080d",
          "accent": "#6ea8ff",
          "accent-content": "#06080d",
          "neutral": "#0c0d10",
          "neutral-content": "#f2f3f5",
          "base-100": "#0c0d10",
          "base-200": "#13151b",
          "base-300": "#1a1c23",
          "base-content": "#f2f3f5",
          "info": "#6ea8ff",
          "success": "#6ea8ff",
          "warning": "#6ea8ff",
          "error": "#6ea8ff",
        },
        'portfolio-light': {
          "primary": "#2b5fff",
          "primary-content": "#ffffff",
          "secondary": "#2b5fff",
          "secondary-content": "#ffffff",
          "accent": "#2b5fff",
          "accent-content": "#ffffff",
          "neutral": "#f9f9fc",
          "neutral-content": "#1a1b1e",
          "base-100": "#f9f9fc",
          "base-200": "#f0f1f5",
          "base-300": "#e8e9ed",
          "base-content": "#1a1b1e",
          "info": "#2b5fff",
          "success": "#2b5fff",
          "warning": "#2b5fff",
          "error": "#2b5fff",
        },
      }
    ],
  },

  plugins: [require('daisyui')],
};

module.exports = config;
