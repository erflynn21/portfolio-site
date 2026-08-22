import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const THEME_KEY = 'evan-theme';

function getInitialTheme() {
  if (!browser) return 'dark';

  const stored = localStorage.getItem(THEME_KEY);
  if (stored) return stored;

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function createThemeStore() {
  const { subscribe, set } = writable(getInitialTheme());

  function updateDOM(theme) {
    if (browser) {
      document.documentElement.setAttribute('data-theme', `portfolio-${theme}`);
    }
  }

  return {
    subscribe,
    toggle: () => {
      let currentTheme;
      subscribe(value => {
        currentTheme = value;
      })();

      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      if (browser) {
        localStorage.setItem(THEME_KEY, newTheme);
      }

      updateDOM(newTheme);
      set(newTheme);
    },
    set: (newTheme) => {
      if (browser) {
        localStorage.setItem(THEME_KEY, newTheme);
      }
      updateDOM(newTheme);
      set(newTheme);
    }
  };
}

export const theme = createThemeStore();
