<script>
    import { slide, fly } from 'svelte/transition';
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

    <h1 class="text-6xl font-medium mb-8 text-theme-blue">
        I make websites, web apps, and mobile apps.
    </h1>

    <p class="text-2xl mb-2 leading-10">
        I'm a web developer specializing in building user-friendly and
        performant websites, web apps, and mobile apps. I greatly enjoy learning
        new technologies and have recently been building projects with
        Svelte/Sapper, Sanity, and serverless technologies like Firebase,
        Userbase, and Netlify. The latest addition to my programming toolkit is
        Typescript.
    </p>

    <p class="text-2xl mb-2 leading-10">
        I'm currently interested in learning more about optomizing websites and
        apps for performance and Jamstack technologies.
    </p>
</section>

<section
    name="skills"
    class=""
    in:fly|local={{ delay: 800, y: 300, duration: 500 }}
    out:fly|local={{ x: 1000, duration: 500 }}
>
    <h2 class="text-theme-blue text-4xl mt-8 mb-4 font-medium">Skills:</h2>
    <p class="text-lg tracking-wider">
        HTML | CSS | Javascript | Typescript | Svelte | Sapper | Tailwind CSS |
        Nodejs | MongoDB | Rest/GraphQL APIS | Meteor | Python | Userbase |
        Firebase | Capacitor | Framework7 | Dev Tools | Git | Github | Netlify |
        CI/CD Workflows | Heroku | Apple App Store Deployment | Google Cloud
        Platform | Cloudflare
    </p>
</section>
