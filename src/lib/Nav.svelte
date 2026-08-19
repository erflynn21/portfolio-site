<script>
  import { theme } from "$lib/themeStore";
</script>

<nav class="max-w-[1180px] mx-auto px-11 py-[22px] flex justify-between items-center">
  <a href="/" class="font-mono font-medium text-xs uppercase tracking-[0.1em]">
    Evan Flynn
  </a>

  <div class="flex items-center gap-8">
    <div class="flex items-center gap-6 font-mono text-xs">
      <a href="work" class="uppercase tracking-wider hover:text-primary transition-colors">Work</a>
      <a href="contact" class="uppercase tracking-wider hover:text-primary transition-colors">Contact</a>

      <button
        on:click={() => theme.toggle()}
        class="border border-primary px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-content transition-colors"
      >
        ● {$theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </div>
  </div>
</nav>
