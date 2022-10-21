<script>
  import { page } from "$app/stores";
  import { afterUpdate } from "svelte";
  let url = "";

  afterUpdate(() => {
    url = $page.routeId;
  });
</script>

<nav class="py-4 relative">
  <a href="." class="absolute top-4 left-6 md:left-8 lg:left-24">
    <img src="favicon.png" alt="evan flynn logo" class="h-10" />
  </a>
  <ul class="flex items-center justify-end mt-2">
    <li>
      <a
        class="{url === ''
          ? 'border-b border-theme-blue'
          : ''} mx-4 font-light text-base"
        href=".">home</a
      >
    </li>
    <li>
      <a
        class="{url === 'work'
          ? 'border-b border-theme-blue'
          : ''} mx-4 font-light text-base"
        href="work">work</a
      >
    </li>
    <!-- <li>
            <a
                class="{url === 'blog'
                    ? 'border-b border-theme-blue'
                    : ''} mx-6 font-light text-lg"
                href="blog">blog</a
            >
        </li> -->
    <li>
      <a
        class="{url === 'contact'
          ? 'border-b border-theme-blue'
          : ''} mx-4 mr-6 font-light text-base"
        href="contact">contact</a
      >
    </li>
  </ul>
</nav>
