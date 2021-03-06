<script>
    import Footer from '../components/Footer.svelte';
    import Nav from '../components/Nav.svelte';
    import { stores } from '@sapper/app';
    import PageLoadingBar from 'sapper-page-loading-bar/PageLoadingBar.svelte';
    const { preloading } = stores();

    export let segment;
</script>

<Nav {segment} />

<div class="preloading">
    <PageLoadingBar {preloading} color2="#00C2FF" color1="#008CC6" />
</div>

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
        min-height: calc(100vh - 178px);
    }

    @media (min-width: 640px) {
        main {
            min-height: calc(100vh - 136px);
        }
    }
</style>
