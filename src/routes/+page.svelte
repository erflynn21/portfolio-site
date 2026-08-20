<script>
  import { fly } from "svelte/transition";
  export let data;

  const projects = data?.body?.projects || [];

  const workCards = [
    {
      org: "Moov",
      category: "Implementation",
      metric: "80% faster onboarding",
      name: "Customer Implementation Framework",
      description:
        "Built a Pylon-based tracking system linking customer milestones, compliance checkpoints and automated stakeholder alerts — surfacing blockers before they hit timelines.",
      stack: "Pylon · incident.io · Looker",
    },
    {
      org: "Proxyrack",
      category: "Developer Experience",
      metric: "50+ live code examples",
      name: "Interactive API Documentation",
      description:
        "Authored & validated 50+ editable code examples across Python, JS, Node & PHP in an embedded sandbox so developers could test auth, rotation and geo-targeting right in the docs.",
      stack: "REST / GraphQL · Postman",
    },
    {
      org: "Proxyrack",
      category: "Global Enablement",
      metric: "6 languages · 100% coverage",
      name: "Multilingual Documentation",
      description:
        "Self-initiated internationalization of the full help center & API docs with an AI-assisted, human-reviewed workflow, plus a sync process to keep every translation current.",
      stack: "Intercom · Prismy AI",
    },
  ];

  const stats = [
    {
      number: "80%",
      label: "faster onboarding",
      caption: "3–6 months → 2–3 weeks",
    },
    {
      number: "63",
      label: "enterprise launches",
      caption: "at Moov, +17 in progress",
    },
    { number: "4.9", label: "CSAT score", caption: "98% satisfaction rate" },
    {
      number: "112",
      label: "customers supported",
      caption: "on a live payments API",
    },
  ];

  const skillGroups = [
    {
      label: "Technical Support",
      skills: [
        "Pylon",
        "Intercom",
        "HelpScout",
        "Notion",
        "incident.io",
        "jam.dev",
        "AI chatbots",
      ],
    },
    {
      label: "Customer Engagement",
      skills: [
        "Onboarding strategy",
        "Implementation planning",
        "Technical documentation",
        "CSAT management",
        "Feedback optimization",
      ],
    },
    {
      label: "APIs & Debugging",
      skills: [
        "REST / GraphQL",
        "Postman",
        "API troubleshooting",
        "Log analysis",
        "DevTools",
      ],
    },
    {
      label: "Data & Monitoring",
      skills: ["BigQuery", "Looker", "SQL", "Honeycomb", "KPI tracking"],
    },
    {
      label: "Programming",
      skills: [
        "JavaScript",
        "Python",
        "Node.js",
        "HTML / CSS",
        "Flutter / Dart",
        "Terminal / CLI",
      ],
    },
    {
      label: "Cloud, DevOps & Backend",
      skills: [
        "Git / GitHub",
        "CI/CD",
        "Cloudflare",
        "Google Cloud",
        "Netlify",
        "Firebase",
        "MongoDB",
        "Airtable",
        "App Store deploy",
      ],
    },
    {
      label: "No / Low-Code & Integrations",
      skills: [
        "Flutterflow",
        "Webflow",
        "Zapier",
        "n8n",
        "Plaid",
        "Payment platforms",
      ],
    },
    {
      label: "Collaboration",
      skills: ["Linear", "Slack", "macOS / Linux / Windows"],
    },
  ];
</script>

<svelte:head>
  <title>Home - Evan Flynn</title>
  <meta property="og:title" content="Evan Flynn – Implementation Engineer" />
  <meta
    property="og:description"
    content="Bridging people and the software they rely on."
  />
</svelte:head>

<div class="border-b border-base-content/10">
  <section
    class="py-[90px] px-11 max-w-[1180px] mx-auto"
    in:fly={{ y: 30, duration: 900, delay: 200 }}
  >
    <div class="mb-12">
      <p class="font-mono text-xs uppercase tracking-[0.14em] text-primary mb-6">
        Implementation + Support Engineer @ Moov
      </p>
      <h1
        class="font-serif text-[clamp(46px,8.2vw,108px)] leading-[0.98] tracking-[-0.01em] max-w-[14ch] mb-8"
      >
        Bridging people and the software they rely on.
      </h1>
      <p
        class="text-[clamp(17px,2vw,21px)] leading-[1.6] text-base-content/70 max-w-[600px] mb-8"
      >
        I support and implement software for the people who depend on it daily —
        and build performant web & mobile apps that prove how it should feel.
      </p>

      <div class="flex flex-wrap gap-4">
        <a
          href="#work"
          class="px-7 py-[15px] rounded-full bg-primary text-primary-content font-mono font-semibold text-sm hover:translate-y-[-2px] transition-transform"
        >
          See selected work
        </a>
        <a
          href="#contact"
          class="px-7 py-[15px] rounded-full border border-primary text-primary font-mono font-semibold text-sm hover:translate-y-[-2px] transition-transform"
        >
          Get in touch
        </a>
      </div>
    </div>
  </section>
</div>

<div class="border-b border-base-content/10">
  <section
    class="py-[50px] px-11 max-w-[1180px] mx-auto"
    in:fly={{ y: 30, duration: 900, delay: 400 }}
  >
    <div class="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-7">
      {#each stats as stat (stat.label)}
        <div>
          <div class="font-serif text-[54px] leading-[0.9] text-primary mb-2">
            {stat.number}
          </div>
          <div class="font-mono text-sm font-medium text-base-content mb-1">
            {stat.label}
          </div>
          <div class="font-mono text-xs text-base-content/50">
            {stat.caption}
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

<div class="border-b border-base-content/10">
  <section
    id="work"
    class="py-20 px-11 max-w-[1180px] mx-auto"
    in:fly={{ y: 30, duration: 900, delay: 600 }}
  >
    <div class="mb-12">
      <div class="flex items-baseline gap-3 mb-4">
        <span class="font-mono text-sm text-primary font-semibold">01</span>
        <h2 class="font-serif text-4xl">Selected work</h2>
      </div>
    </div>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[30px]">
      {#each workCards as card (card.name)}
        <div
          class="border border-base-content/10 rounded-2xl bg-base-200/30 p-8 flex flex-col hover:border-primary hover:translate-y-[-4px] transition-all duration-300"
        >
          <div
            class="font-mono text-xs uppercase tracking-wider text-base-content/50 mb-4"
          >
            {card.org} · {card.category}
          </div>
          <div class="font-serif text-[38px] text-primary mb-3">
            {card.metric}
          </div>
          <h3 class="text-xl font-semibold mb-4 font-sans">
            {card.name}
          </h3>
          <p class="text-sm leading-[1.65] text-base-content/70 mb-6 flex-grow">
            {card.description}
          </p>
          <div class="font-mono text-xs text-base-content/50">
            {card.stack}
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

<div class="border-b border-base-content/10">
  <section
    class="py-20 px-11 max-w-[1180px] mx-auto"
    in:fly={{ y: 30, duration: 900, delay: 800 }}
  >
    <div class="mb-8">
      <div class="flex items-baseline gap-3 mb-4">
        <span class="font-mono text-sm text-primary font-semibold">02</span>
        <h2 class="font-serif text-4xl">Also builds</h2>
      </div>
      <p class="text-sm leading-relaxed text-base-content/70 max-w-[540px]">
        Side projects — web & mobile apps I design and ship end to end. Proof I
        speak fluent developer when I'm supporting one.
      </p>
    </div>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[22px]">
      {#each projects as project (project.name)}
        <a
          href={project.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          class="border border-base-content/10 rounded-xl overflow-hidden bg-base-200/30 hover:border-primary hover:translate-y-[-4px] transition-all duration-300 flex flex-col"
        >
          {#if project.mainImage}
            <img
              src={project.mainImage}
              alt={project.name}
              class="w-full h-[140px] object-cover"
            />
          {/if}
          <div class="p-5">
            <h3 class="font-semibold text-base mb-2 font-sans">
              {project.name}
            </h3>
            {#if project.status}
              <div
                class="font-mono text-xs text-primary mb-2 font-medium uppercase"
              >
                {project.status}
              </div>
            {/if}
            {#if project.stack}
              <div class="font-mono text-xs text-base-content/50">
                {project.stack}
              </div>
            {/if}
          </div>
        </a>
      {/each}
    </div>
  </section>
</div>

<div class="border-b border-base-content/10">
  <section
    class="py-20 px-11 max-w-[1180px] mx-auto"
    in:fly={{ y: 30, duration: 900, delay: 1000 }}
  >
    <div class="mb-12">
      <div class="flex items-baseline gap-3 mb-4">
        <span class="font-mono text-sm text-primary font-semibold">03</span>
        <h2 class="font-serif text-4xl">Toolkit</h2>
      </div>
    </div>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 mb-8">
      {#each skillGroups as group (group.label)}
        <div>
          <h3
            class="font-mono text-xs uppercase tracking-[0.1em] text-base-content/50 mb-4 font-medium"
          >
            {group.label}
          </h3>
          <div class="flex flex-wrap gap-3">
            {#each group.skills as skill (skill)}
              <span
                class="px-[13px] py-[7px] rounded-full border border-base-content/20 bg-base-200/50 text-sm font-sans"
              >
                {skill}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <p class="font-mono text-xs text-base-content/50">
      Also comfortable with Adobe Creative Suite, Final Cut Pro, Google Workspace,
      Audacity — and a fluent Mandarin Chinese speaker.
    </p>
  </section>
</div>

<div class="border-b border-base-content/10">
  <section
    id="contact"
    class="py-[110px] px-11 pb-[70px] max-w-[1180px] mx-auto text-center"
    in:fly={{ y: 30, duration: 900, delay: 1200 }}
  >
    <p class="font-mono text-xs uppercase tracking-[0.14em] text-primary mb-6">
      ● Let's connect
    </p>

    <div class="flex flex-wrap justify-center gap-4 mb-8">
      <a
        href="mailto:evan@evanflynn.com"
        class="px-7 py-[15px] rounded-full bg-primary text-primary-content font-mono text-sm font-semibold hover:translate-y-[-2px] transition-transform"
      >
        evan@evanflynn.com
      </a>
      <a
        href="https://www.linkedin.com/in/erflynn21/"
        target="_blank"
        rel="noopener noreferrer"
        class="px-7 py-[15px] rounded-full border border-primary text-primary font-mono text-sm font-semibold hover:translate-y-[-2px] transition-transform"
      >
        LinkedIn
      </a>
    </div>

    <p class="font-mono text-xs text-base-content/50">© 2026 Evan Flynn</p>
  </section>
</div>
