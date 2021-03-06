<script>
    import Footer from '../components/Footer.svelte';
    import Nav from '../components/Nav.svelte';

    export let segment;
</script>

<Nav {segment} />

<div class="bg-gray-900">
    <main
        class="font-light text-white relative my-0 box-border pt-2 pb-12 max-w-5xl mx-6 md:mx-8 lg:mx-24"
    >
        <slot />
    </main>
</div>

<Footer />

<style>
    main {
        min-height: calc(100vh - 136px);
    }
</style>
