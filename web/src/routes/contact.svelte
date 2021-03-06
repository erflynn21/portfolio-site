<script>
    import { fade, slide, fly } from 'svelte/transition';

    let formData = {
        name: '',
        email: '',
        message: '',
    };

    let displaySuccess = false;

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&');
    };

    function handleSubmit() {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...formData }),
        })
            .then(() => (displaySuccess = true))
            .catch((error) => alert(error));

        formData = {
            name: '',
            email: '',
            message: '',
        };
    }
</script>

<div class="relative">
    <div class="absolute inset-0">
        <div class="absolute inset-y-0 left-0 w-1/2 " />
    </div>
    <div class="relative max-w-7xl lg:grid lg:grid-cols-5 mt-24">
        <div
            class="lg:col-span-2 xl:pr-12"
            in:fly|local={{ x: -1000, delay: 600, duration: 500 }}
            out:fly|local={{ y: 1000, duration: 500 }}
        >
            <div class="max-w-lg">
                <h2 class="text-4xl mb-8">get in touch</h2>
                <p class="mt-3 text-lg leading-6 ">
                    If you'd like to get in touch, you can simply fill out this
                    form or directly email me at the email below. A message on
                    LinkedIn or Github works as well!
                </p>
                <dl class="mt-8 text-base ">
                    <div class="mt-6">
                        <dt class="sr-only">Phone number</dt>
                        <dd class="flex">
                            <svg
                                class="flex-shrink-0 h-6 w-6 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <span class="ml-3">
                                <a href="tel:+1 3306661431">+1 (330) 227-8316</a
                                >
                            </span>
                        </dd>
                    </div>
                    <div class="mt-3">
                        <dt class="sr-only">Email</dt>
                        <dd class="flex">
                            <svg
                                class="flex-shrink-0 h-6 w-6 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <span class="ml-3">
                                <a
                                    target="_top"
                                    href="mailto:evan@evanflynn.com"
                                    >evan@evanflynn.com</a
                                >
                            </span>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
        <div
            class="mt-8 lg:mt-2 lg:col-span-3 lg:ml-8"
            in:fly|local={{ x: 1000, delay: 600, duration: 500 }}
            out:fly|local={{ y: -1000, duration: 500 }}
        >
            <div class="max-w-lg lg:max-w-none">
                <form
                    name="contact"
                    action="POST"
                    netlify
                    on:submit|preventDefault={handleSubmit}
                    class="grid grid-cols-1 gap-y-6"
                >
                    <div>
                        <label for="full_name" class="sr-only">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="full_name"
                            autocomplete="name"
                            bind:value={formData.name}
                            class="block w-full shadow-sm py-3 px-4  focus:ring-theme-blue focus:border-theme-blue rounded-md"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <label for="email" class="sr-only">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            bind:value={formData.email}
                            class="block w-full shadow-sm py-3 px-4 focus:ring-theme-blue focus:border-theme-blue rounded-md"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label for="message" class="sr-only">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            bind:value={formData.message}
                            class="block w-full shadow-sm py-3 text-black px-4 focus:ring-theme-blue focus:border-theme-blue rounded-md"
                            placeholder="Message"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-theme-blue hover:bg-theme-dark-blue"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

{#if displaySuccess === true}
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
            class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
            <div
                class="fixed inset-0 transition-opacity"
                aria-hidden="true"
                in:fade={{ duration: 200 }}
                out:fade={{ duration: 150 }}
            >
                <div class="absolute inset-0 bg-gray-500 opacity-75" />
            </div>

            <span
                class="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true">&#8203;</span
            >

            <div
                class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
                in:fade={{ duration: 200 }}
                out:fade={{ duration: 150 }}
            >
                <div>
                    <div
                        class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-theme-blue"
                    >
                        <svg
                            class="h-6 w-6 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-5">
                        <h3
                            class="text-lg leading-6 font-medium text-gray-900"
                            id="modal-headline"
                        >
                            Thanks!
                        </h3>
                        <div class="mt-2">
                            <p class="text-sm text-gray-500">
                                I've got your information and will respond to
                                you as soon as I can. Have a great day!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mt-5 sm:mt-6">
                    <button
                        on:click={() => (displaySuccess = false)}
                        type="button"
                        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white bg-theme-blue hover:bg-theme-dark-blue focus:outline-none"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}
