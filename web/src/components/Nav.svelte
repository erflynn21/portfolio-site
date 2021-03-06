<script>
    export let segment;
</script>

<nav class="py-4 bg-gray-900 text-white relative">
    <div class="absolute top-4 left-6 md:left-8 lg:left-16">
        <img src="favicon.png" alt="evan flynn logo" class="h-10" />
    </div>
    <ul class="flex items-center justify-end mt-2">
        <li>
            <a
                class="{segment === 'home'
                    ? 'selected'
                    : ''} mx-4 font-light text-base"
                href=".">home</a
            >
        </li>
        <li>
            <a
                class="{segment === 'work'
                    ? 'selected'
                    : ''} mx-4 font-light text-base"
                href="work">work</a
            >
        </li>
        <!-- <li>
            <a
                class="{segment === 'blog'
                    ? 'selected'
                    : ''} mx-6 font-light text-lg"
                href="blog">blog</a
            >
        </li> -->
        <li>
            <a
                class="{segment === 'contact'
                    ? 'selected'
                    : ''} mx-4 mr-6 font-light text-base"
                href="contact">contact</a
            >
        </li>
    </ul>
</nav>
