<script>
  import "../app.postcss";
  import Nav from "../lib/Nav.svelte";
</script>

<Nav />

<main
  class="font-light text-white relative my-0 box-border pt-2 pb-12 max-w-5xl mx-6 md:mx-8 lg:mx-24"
>
  <slot />
</main>

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
