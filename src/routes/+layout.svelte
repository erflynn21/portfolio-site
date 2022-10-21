<script>
  import "../app.postcss";
  import Footer from "$lib/Footer.svelte";
  import Nav from "$lib/Nav.svelte";

  import { onMount } from "svelte";
  import { themeChange } from "theme-change";

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);
    // 👆 false parameter is required for svelte
  });
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
    min-height: calc(100vh - 178px);
  }

  @media (min-width: 640px) {
    main {
      min-height: calc(100vh - 136px);
    }
  }
</style>
