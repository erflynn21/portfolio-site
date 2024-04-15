<script>
  import { slide, fly } from "svelte/transition";
</script>

<svelte:head>
  <title>Home - Evan Flynn</title>
</svelte:head>

<section
  name="hero"
  class="mt-24"
  in:fly|local={{ y: 300, duration: 500, delay: 600 }}
  out:fly|local={{ x: -1000, duration: 500 }}
>
  <h2 class="text-4xl mb-8">hi, I'm Evan</h2>

  <h1 class="text-6xl font-medium mb-8 text-primary">
    I make user-friendly and performant websites, web apps, and mobile apps.
  </h1>

  <p class="text-2xl mb-4 leading-10">
    I'm a Technical Support Engineer and web/mobile app developer in my free
    time. I greatly enjoy learning new technologies and have recently been
    building projects with Flutterflow, Svelte/Sveltekit, Tailwind, Sanity,
    Firebase, Userbase, and Cloudflare.
  </p>

  <p class="text-2xl mb-4 leading-10">
    I'm currently interested in learning building more in no/low-code tools like
    Flutterflow, Framer, and Webflow. I am also passionate about optomizing
    websites and mobile apps for performance with technologies like
    Svelte/Sveltekit, Tailwind, and Cloudflare.
  </p>
</section>

<section
  name="skills"
  class=""
  in:fly|local={{ delay: 800, y: 300, duration: 500 }}
  out:fly|local={{ x: 1000, duration: 500 }}
>
  <h2 class="text-primary text-4xl mt-8 mb-4 font-medium">Skills:</h2>
  <p class="text-lg tracking-wider mb-4">
    No/Low-Code: Flutterflow | Intercom | Notion | Webflow | Zapier
  </p>
  <p class="text-lg tracking-wider mb-4">
    Frontend: HTML | CSS | Javascript | Svelte | Sveltekit | Tailwind CSS |
    Capacitor | Framework7
  </p>
  <p class="text-lg tracking-wider mb-4">
    Backend/Serverless: Nodejs | Firebase | MongoDB | Rest/GraphQL APIS |
    Userbase | Cloudflare | Google Cloud Platform
  </p>
  <p class="text-lg tracking-wider">
    Other: Dev Tools | Git | Github | CI/CD Workflows | Apple App Store
    Deployment
  </p>
</section>
