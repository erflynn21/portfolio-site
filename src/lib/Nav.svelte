<script>
  import { page } from "$app/stores";
  import { afterUpdate } from "svelte";
  let url = "";

  afterUpdate(() => {
    url = $page.routeId;
  });
</script>

<div class="navbar bg-base-100 py-4">
  <div class="flex-1">
    <a href="." class="absolute top-6 left-6 md:left-8 lg:left-24">
      <img
        src="favicon.png"
        alt="evan flynn logo"
        class="h-10 bg-primary rounded-full"
      />
    </a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <!-- <li>
        <a
          class="{url === ''
            ? 'border-b border-primary'
            : ''} mx-2 font-light text-base hover: bg-transparent"
          style="border-radius: 0px;"
          href=".">home</a
        >
      </li> -->
      <li>
        <a
          data-sveltekit-prefetch
          class="{url === 'work'
            ? 'border-b border-primary'
            : ''} mx-1 font-light text-base hover: bg-transparent"
          style="border-radius: 0px;"
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
            ? 'border-b border-primary'
            : ''} mx-1 font-light text-base hover: bg-transparent"
          style="border-radius: 0px;"
          href="contact">contact</a
        >
      </li>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <li tabindex="0" class=" dropdown-end">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="hover:bg-transparent">
          theme
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            ><path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            /></svg
          >
        </a>
        <ul
          class="z-10 bg-base-100 border border-primary dropdown-content overflow-y-auto max-h-96"
        >
          <li>
            <button data-set-theme="light" data-act-class="ACTIVECLASS"
              >Light</button
            >
          </li>
          <li>
            <button data-set-theme="dark" data-act-class="ACTIVECLASS"
              >Dark</button
            >
          </li>
          <li>
            <button data-set-theme="cupcake" data-act-class="ACTIVECLASS"
              >Cupcake</button
            >
          </li>
          <li>
            <button data-set-theme="bumblebee" data-act-class="ACTIVECLASS"
              >Bumblebee</button
            >
          </li>
          <li>
            <button data-set-theme="emerald" data-act-class="ACTIVECLASS"
              >Emerald</button
            >
          </li>
          <li>
            <button data-set-theme="corporate" data-act-class="ACTIVECLASS"
              >Corporate</button
            >
          </li>
          <li>
            <button data-set-theme="synthwave" data-act-class="ACTIVECLASS"
              >Synthwave</button
            >
          </li>
          <li>
            <button data-set-theme="retro" data-act-class="ACTIVECLASS"
              >Retro</button
            >
          </li>
          <li>
            <button data-set-theme="cyberpunk" data-act-class="ACTIVECLASS"
              >Cyberpunk</button
            >
          </li>
          <li>
            <button data-set-theme="valentine" data-act-class="ACTIVECLASS"
              >Valentine</button
            >
          </li>
          <li>
            <button data-set-theme="halloween" data-act-class="ACTIVECLASS"
              >Halloween</button
            >
          </li>
          <li>
            <button data-set-theme="garden" data-act-class="ACTIVECLASS"
              >Garden</button
            >
          </li>
          <li>
            <button data-set-theme="forest" data-act-class="ACTIVECLASS"
              >Forest</button
            >
          </li>
          <li>
            <button data-set-theme="aqua" data-act-class="ACTIVECLASS"
              >Aqua</button
            >
          </li>
          <li>
            <button data-set-theme="lofi" data-act-class="ACTIVECLASS"
              >Lofi</button
            >
          </li>
          <li>
            <button data-set-theme="pastel" data-act-class="ACTIVECLASS"
              >Pastel</button
            >
          </li>
          <li>
            <button data-set-theme="fantasy" data-act-class="ACTIVECLASS"
              >Fantasy</button
            >
          </li>
          <li>
            <button data-set-theme="wireframe" data-act-class="ACTIVECLASS"
              >Wireframe</button
            >
          </li>
          <li>
            <button data-set-theme="black" data-act-class="ACTIVECLASS"
              >Black</button
            >
          </li>
          <li>
            <button data-set-theme="luxury" data-act-class="ACTIVECLASS"
              >Luxury</button
            >
          </li>
          <li>
            <button data-set-theme="dracula" data-act-class="ACTIVECLASS"
              >Dracula</button
            >
          </li>
          <li>
            <button data-set-theme="cmyk" data-act-class="ACTIVECLASS"
              >CMYK</button
            >
          </li>
          <li>
            <button data-set-theme="autumn" data-act-class="ACTIVECLASS"
              >Autumn</button
            >
          </li>
          <li>
            <button data-set-theme="business" data-act-class="ACTIVECLASS"
              >Business</button
            >
          </li>
          <li>
            <button data-set-theme="acid" data-act-class="ACTIVECLASS"
              >Acid</button
            >
          </li>
          <li>
            <button data-set-theme="lemonade" data-act-class="ACTIVECLASS"
              >Lemonade</button
            >
          </li>
          <li>
            <button data-set-theme="night" data-act-class="ACTIVECLASS"
              >Night</button
            >
          </li>
          <li>
            <button data-set-theme="coffee" data-act-class="ACTIVECLASS"
              >Coffee</button
            >
          </li>
          <li>
            <button data-set-theme="cupcake" data-act-class="ACTIVECLASS"
              >Winter</button
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
