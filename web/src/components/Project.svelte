<script>
    import { slide, fly } from 'svelte/transition';
    export let project;
</script>

<div
    class="flex flex-col rounded-lg shadow-lg overflow-hidden"
    in:fly={{ y: 300, duration: 500, delay: 800 }}
    out:fly={{ y: 1000, duration: 500 }}
>
    <div class="flex-shrink-0">
        <img
            class="h-64 w-full object-cover "
            src={project.mainImage}
            alt="project image"
        />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
            <p class="text-xl font-semibold text-gray-900">
                {project.name}
            </p>
            <p class="mt-3 text-base text-gray-500 ">
                {project.description}
            </p>
        </div>
        <div class="mt-4 flex">
            {#if project.github}
                <a
                    class="flex space-x-1 text-gray-500 items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                    ><svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="#00C2FF"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        /></svg
                    >
                    <p>Github</p></a
                >
            {/if}
            {#if project.url}
                <a
                    class="flex space-x-1 ml-6 text-gray-500 items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.url}
                >
                    <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="#00C2FF"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        /></svg
                    >
                    <p>Live URL</p>
                </a>
            {/if}
            <div class="flex space-x-1 ml-6 text-gray-500 items-center">
                <p>Status: {project.status}</p>
            </div>
        </div>
    </div>
</div>
