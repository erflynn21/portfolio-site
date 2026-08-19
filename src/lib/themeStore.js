import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const THEME_KEY = 'evan-theme';

function createThemeStore() {
  let initialTheme = 'dark';

  if (browser) {
    const stored = localStorage.getItem(THEME_KEY);
    initialTheme = stored || 'dark';
  }

  const { subscribe, set } = writable(initialTheme);

  return {
    subscribe,
    toggle: () => {
      let newTheme = 'dark';
      const unsubscribe = subscribe(theme => {
        newTheme = theme === 'dark' ? 'light' : 'dark';
      })();
      unsubscribe();

      if (browser) {
        localStorage.setItem(THEME_KEY, newTheme);
        document.documentElement.setAttribute('data-theme', `portfolio-${newTheme}`);
      }

      set(newTheme);
    },
    set: (theme) => {
      if (browser) {
        localStorage.setItem(THEME_KEY, theme);
        document.documentElement.setAttribute('data-theme', `portfolio-${theme}`);
      }
      set(theme);
    }
  };
}

export const theme = createThemeStore();
