<script context="module">
    import client from '../sanityClient';

    export async function preload() {
        try {
            const projects = await client.fetch(
                '*[_type == "project"] | { name, "mainImage": mainImage.asset->url, description, status, url, github}'
            );
            return { projects };
        } catch (err) {
            this.error(500, err);
        }
    }
</script>

<script>
    import { fade } from 'svelte/transition';
    export let projects;
    import Project from '../components/Project.svelte';
</script>

<section name="hero" class="mt-24" in:fade|local={{ delay: 200 }}>
    <h1 class="text-4xl mb-8">work</h1>
    <div
        class="max-w-lg grid gap-5 lg:grid-cols-2 mx-auto md:mx-0 lg:max-w-none"
    >
        {#each projects as project}
            <Project {project} />
        {/each}
    </div>
</section>
