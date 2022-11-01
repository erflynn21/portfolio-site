<script>
  import { fly } from "svelte/transition";
  export let project;
</script>

<div
  class="card card-compact bg-base-300 shadow-xl"
  in:fly={{ y: 300, duration: 500, delay: 800 }}
  out:fly={{ y: 1000, duration: 500 }}
>
  <figure>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      class="h-64 w-full object-cover "
      src={project.mainImage}
      alt="project image"
    />
  </figure>
  <div class="card-body">
    <h2 class="card-title mt-2">{project.name}</h2>
    <p>{project.description}</p>
    <div class="card-actions">
      <div class="mt-4 flex">
        {#if project.github}
          <a
            class="flex space-x-1 items-center"
            target="_blank"
            rel="noopener noreferrer"
            href={project.github}
            ><svg
              class="w-5 h-5"
              fill="none"
              stroke="hsl(var(--p))"
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
            class="flex space-x-1 ml-6 items-center"
            target="_blank"
            rel="noopener noreferrer"
            href={project.url}
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="hsl(var(--p))"
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
        <div class="flex space-x-1 ml-6 items-center">
          <p>Status: {project.status}</p>
        </div>
      </div>
    </div>
  </div>
</div>
