<script>
  import "../app.postcss";
  import Footer from "$lib/Footer.svelte";
  import Nav from "$lib/Nav.svelte";
  import NProgress from "nprogress";
  import { navigating } from "$app/stores";
  import "nprogress/nprogress.css";
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);
    // 👆 false parameter is required for svelte
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

<div data-theme="">
  <Nav />

  <main
    class="font-light relative my-0 box-border pt-2 pb-12 max-w-5xl mx-6 md:mx-8 lg:mx-24"
  >
    <slot />
  </main>

  <Footer />
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
