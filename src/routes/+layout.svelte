<script>
  import "../app.postcss";
  import Nav from "$lib/Nav.svelte";
  import NProgress from "nprogress";
  import { navigating } from "$app/stores";
  import "nprogress/nprogress.css";
  import { onMount } from "svelte";
  import { theme } from "$lib/themeStore";

  let currentTheme = 'dark';
  theme.subscribe(t => {
    currentTheme = t;
  });

  onMount(() => {
    document.documentElement.setAttribute('data-theme', `portfolio-${currentTheme}`);
  });

  NProgress.configure({
    minimum: 0.16,
    showSpinner: false,
  });

  $: {
    if ($navigating) {
      NProgress.start();
    }
    if (!$navigating) {
      NProgress.done();
    }
  }
</script>

<div data-theme="portfolio-{currentTheme}">
  <Nav />

  <main
    class="relative my-0 box-border w-full"
  >
    <slot />
  </main>
</div>

<style>
  main {
    min-height: calc(100vh - 153px);
  }

  @media (min-width: 640px) {
    main {
      min-height: calc(100vh - 153px);
    }
  }

  :global(#nprogress .bar) {
    background: hsl(var(--p));
    height: 4px;
  }

  :global(#nprogress .peg) {
    box-shadow: 0 0 10px hsl(var(--p)), 0 0 5px hsl(var(--p));
  }

  :global(#nprogress .spinner-icon) {
    border-top-color: hsl(var(--p));
    border-left-color: hsl(var(--p));
  }
</style>
