<script>
    import Nav from '../components/Nav.svelte';

    export let segment;
</script>

<Nav {segment} />

<div class="bg-theme-gray">
    <main
        class="font-light relative my-0 box-border pt-2 pb-12 max-w-5xl mx-6 md:mx-8 lg:mx-16"
    >
        <slot />
    </main>
</div>
