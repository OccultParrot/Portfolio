<script lang="ts">
	import { fly } from 'svelte/transition';
	class framework {
		'name': string;
		'language': string[];
		'description': string = '';
	}

	class project {
		'name': string;
		'description': string;
		'languages': string[];
		'frameworks': string[];
		'url': projectLink[];
	}

	class projectLink {
		'name': string;
		'url': string;
	}

	let selected_language: string = $state('');

	const languages: string[] = [
		'Bash',
		'C#',
		'C++',
		'GDScript',
		'GSL',
		'GLSL',
		'Java',
		'Javascript',
		'Lua',
		'Python',
		'Rust',
		'Typescript',
		'Visual Basic',
		'SQL'
	];

	const frameworks: framework[] = [
		{
			name: 'React',
			language: ['Javascript', 'Typescript'],
			description: 'A component-based library for building interactive user interfaces.'
		},
		{
			name: 'Svelte',
			language: ['Javascript', 'Typescript'],
			description: 'A compiler-driven UI framework that ships very little runtime code.'
		},
		{
			name: 'ASP.NET',
			language: ['C#'],
			description: "Microsoft's framework for building web apps and APIs in C#."
		},
		{
			name: 'Axum',
			language: ['Rust'],
			description: 'An ergonomic, modular web framework built on Tokio and Tower.'
		},
		{
			name: 'Express.js',
			language: ['Javascript', 'Typescript'],
			description: 'A minimal, flexible web server framework for Node.js.'
		},
		{
			name: 'Fastapi',
			language: ['Python'],
			description: 'A fast, modern API framework with automatic docs and type validation.'
		},
		{
			name: 'Flask',
			language: ['Python'],
			description: 'A lightweight micro-framework for web apps and APIs.'
		},
		{
			name: 'MonoGame',
			language: ['C#'],
			description: 'An open-source framework for building cross-platform 2D and 3D games.'
		},
		{
			name: 'Bevy',
			language: ['Rust'],
			description: 'A data-driven game engine built around an entity component system.'
		},
		{
			name: 'Discord.py',
			language: ['Python'],
			description: 'A framework for creating discord bots.'
		}
	];

	const projects: project[] = [
		{
			name: 'Portfolio',
			description: 'My portfolio, its gone through a lot of changes over the years.',
			languages: ['Typescript'],
			frameworks: ['Svelte'],
			url: [
				{ name: 'Site', url: 'https://stemler.dev' },
				{ name: 'Github Repo', url: 'https://github.com/OccultParrot/Portfolio' }
			]
		},
		{
			name: 'Parrot Talks',
			description: 'A blog site where I talk about things that interest me.',
			languages: ['Rust', 'Typescript', 'SQL'],
			frameworks: ['Axum', 'Svelte'],
			url: [
				{ name: 'Site', url: 'blog.stemler.dev' },
				{ name: 'Github Repo', url: 'https://github.com/OccultParrot/parrot-talks' }
			]
		},
		{
			name: 'Cattalk',
			description:
				'Just a small discord bot that hooks into OBS to make cats look like they talk with a cat per person.',
			languages: ['Python'],
			frameworks: ['Discord.py'],
			url: [{ name: 'Github Repo', url: 'git@github.com:OccultParrot/cattalk.git' }]
		},
		{
			name: 'ASCII Renderer',
			description: 'Renders an image as ASCII text.',
			languages: ['Python'],
			frameworks: [],
			url: [{ name: 'Github Repo', url: 'https://github.com/OccultParrot/ASCIIRender' }]
		},
		{
			name: 'Parrot Sticky Bot',
			description: 'A sticky bot anyone can host and use on their servers.',
			languages: ['Python'],
			frameworks: ['Discord.py'],
			url: [
				{
					name: 'Github Repo',
					url: 'https://github.com/OccultParrot/ParrotStickyBot'
				}
			]
		},
		{
			name: 'Godot 3D Pixel Art',
			description: 'A project I did to mess with composit shaders in godot, it takes a scene and makes it look like pixel art.',
			languages: ["GDScript", "GSL"],
			frameworks: [],
			url: [{
				name: 'Github Repo',
				url: 'https://github.com/OccultParrot/3d-pixel-art'
			}]
		},
		{
			name: 'Godot Cloth Sim',
			description: 'A small cloth / rope simulation written in Godot.',
			languages: ["GDScript"],
			frameworks: [],
			url: [
				{
					name: "Github Repo",
					url: "https://github.com/OccultParrot/ClothSim"
				}
			]
		}
	];

	let matching_frameworks = $derived(
		frameworks.filter((fram) => fram.language.includes(selected_language))
	);

	let matching_projects = $derived(
		projects.filter((proj) => proj.languages.includes(selected_language))
	);
</script>

<!-- Front Splash -->
<div
	class="flex min-h-dvh w-full flex-col items-center justify-center bg-[url(/assets/background.jpg)] bg-cover bg-center px-4 md:bg-fixed"
>
	<div
		class="flex w-full max-w-md flex-col items-center justify-center rounded-2xl bg-white/10 p-4 py-6 backdrop-blur-md lg:w-1/3 lg:max-w-xl"
	>
		<h1 class="font-serif text-2xl sm:text-3xl">Thomas Stemler</h1>
		<!-- Dividing line -->
		<div class="m-2 w-1/3 border-t-2"></div>

		<!-- Contacts -->
		<div class="m-2 flex flex-col">
			<!-- Contacts here... -->
			<a href="mailto:thomas@stemler.dev" class="transition-all duration-200 hover:scale-110 hover:text-green-900">thomas@stemler.dev</a>
		</div>

		<!-- Links to sub-pages -->
		<div class="flex flex-row flex-wrap items-center justify-center gap-2">
			<a
				href="https://github.com/OccultParrot"
				class="transition-all duration-200 hover:scale-110 hover:text-green-900"
			>
				Github
			</a>
			<p class="select-none">●</p>
			<a
				href="https://blog.stemler.dev"
				class="transition-all duration-200 hover:scale-110 hover:text-green-900"
			>
				Blog
			</a>
			<p class="select-none">●</p>
			<a
				href="https://parrotsphotos.com"
				class="transition-all duration-200 hover:scale-110 hover:text-green-900"
				>Photography
			</a>
		</div>
	</div>
</div>

<!-- Skills -->
<div
	class="flex min-h-dvh w-full flex-col items-center justify-center bg-linear-to-br from-white to-green-50 px-4 py-10 sm:px-8 md:px-16 md:py-16"
>
	<div class="flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-start md:gap-10">
		<!-- Languages -->
		<div class="flex w-full flex-col md:w-auto md:shrink-0">
			<h2 class="font-serif text-2xl text-green-900 sm:text-3xl">Languages</h2>
			<p class="mb-4 text-sm text-neutral-500">
				<span class="md:hidden">Tap</span><span class="hidden md:inline">Hover</span> one to explore
			</p>
			<ul
				class="flex flex-wrap gap-2 rounded-2xl border border-green-700/10 bg-white p-3 shadow-lg md:flex-col md:flex-nowrap md:gap-1"
			>
				{#each languages as lang}
					<li>
						<button
							type="button"
							class="flex cursor-pointer items-center gap-3 rounded-full px-4 py-1.5 text-base transition-all duration-200 md:w-56 md:rounded-lg md:text-left md:text-lg
								{selected_language === lang
								? 'bg-green-700 text-white shadow md:translate-x-2'
								: 'bg-green-50 text-neutral-800 hover:bg-green-100 md:bg-transparent'}"
							onmouseenter={() => (selected_language = lang)}
							onfocus={() => (selected_language = lang)}
							onclick={() => (selected_language = lang)}
						>
							<span
								class="hidden h-2 w-2 rounded-full transition-colors duration-200 md:block
									{selected_language === lang ? 'bg-green-200' : 'bg-green-700/30'}"
							></span>
							{lang}
						</button>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Frameworks and Projects -->
		<div class="grid w-full min-w-0 flex-1 gap-8 lg:grid-cols-2">
			<!-- Frameworks -->
			<div class="flex min-w-0 flex-col">
				<h2 class="mb-4 font-serif text-2xl text-green-900 sm:text-3xl">Frameworks</h2>
				{#if matching_frameworks.length > 0}
					<ul class="flex flex-col gap-3">
						{#each matching_frameworks as fram (fram.name)}
							<li
								in:fly={{ x: -20, duration: 200 }}
								class="rounded-xl border border-l-4 border-green-700/20 border-l-green-600 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md"
							>
								<h3 class="font-serif text-xl text-green-900">{fram.name}</h3>
								<p class="mt-1 text-neutral-600">{fram.description}</p>
							</li>
						{/each}
					</ul>
				{:else}
					<div
						class="rounded-xl border border-dashed border-green-700/30 p-6 text-center text-neutral-400"
					>
						{selected_language === ''
							? "Select a language to see what frameworks I've used with it."
							: `No ${selected_language} frameworks yet.`}
					</div>
				{/if}
			</div>

			<!-- Projects -->
			<div class="flex min-w-0 flex-col">
				<h2 class="mb-4 font-serif text-2xl text-green-900 sm:text-3xl">Projects</h2>
				{#if matching_projects.length > 0}
					<ul class="flex flex-col gap-3">
						{#each matching_projects as proj (proj.name)}
							<li in:fly={{ x: -20, duration: 200 }}>
								<a
									href={proj.url[0].url}
									target="_blank"
									rel="noopener noreferrer"
									class="group block rounded-xl border border-l-4 border-green-700/20 border-l-green-600 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
								>
									<div class="flex items-center justify-between">
										<h3 class="font-serif text-xl text-green-900">{proj.name}</h3>
										<span
											class="text-green-700 transition-transform duration-200 group-hover:translate-x-1"
											>→</span
										>
									</div>
									<p class="mt-1 text-neutral-600">{proj.description}</p>
									<div class="mt-3 flex flex-wrap gap-1.5">
										{#each proj.languages as lang}
											<span
												class="rounded-full px-2.5 py-0.5 text-xs
													{lang === selected_language ? 'bg-green-700 text-white' : 'bg-green-100 text-green-900'}"
											>
												{lang}
											</span>
										{/each}
										<div class="rounded-2xl border-l-2 border-green-100"></div>
										{#each proj.frameworks as fram}
											<span class="rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-900">
												{fram}
											</span>
										{/each}
									</div>
								</a>
							</li>
						{/each}
					</ul>
				{:else}
					<div
						class="rounded-xl border border-dashed border-green-700/30 p-6 text-center text-neutral-400"
					>
						{selected_language === ''
							? "Select a language to see what I've built with it."
							: `No ${selected_language} projects yet.`}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>