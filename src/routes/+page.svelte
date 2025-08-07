<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="bg-base-200">
	<main
		class="text-base-content mx-auto min-h-screen max-w-7xl px-4 py-16 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-16 lg:py-24"
	>
		<header
			class="py-4 lg:sticky lg:top-0 lg:col-span-5 lg:flex lg:h-screen lg:flex-col lg:gap-12 lg:self-start"
		>
			<div>
				<div class="space-y-2">
					<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">Lance Hemphill</h1>
					<p class="text-lg font-medium sm:text-xl">Software Engineer</p>
					<a href="/documents/LanceHemphill.pdf" target="_blank" class="btn">My Resume</a>
				</div>

				<nav class="mt-12 hidden lg:block">
					<ul class="space-y-3">
						<li>
							<a href="#about" class="group flex items-center gap-2">
								<span
									class="bg-base-content/50 group-hover:bg-accent h-px w-8 transition-all duration-300 group-hover:w-12"
								></span>
								<span class="group-hover:text-accent font-semibold transition-colors">About</span>
							</a>
						</li>
						<li>
							<a href="#experience" class="group flex items-center gap-2">
								<span
									class="bg-base-content/50 group-hover:bg-accent h-px w-8 transition-all duration-300 group-hover:w-12"
								></span>
								<span class="group-hover:text-accent font-semibold transition-colors"
									>Experience</span
								>
							</a>
						</li>
						<li>
							<a href="#projects" class="group flex items-center gap-2">
								<span
									class="bg-base-content/50 group-hover:bg-accent h-px w-8 transition-all duration-300 group-hover:w-12"
								></span>
								<span class="group-hover:text-accent font-semibold transition-colors">Projects</span
								>
							</a>
						</li>
						<li>
							<a href="#extras" class="group flex items-center gap-2">
								<span
									class="bg-base-content/50 group-hover:bg-accent h-px w-8 transition-all duration-300 group-hover:w-12"
								></span>
								<span class="group-hover:text-accent font-semibold transition-colors">Extras</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div class="mt-8 flex items-center gap-5 lg:mt-0">
				<a
					href="https://github.com/LanceOS"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					class="hover:text-accent transition-colors"
				>
					<Icon icon="mdi:github" class="h-6 w-6" />
				</a>
				<a
					href="https://www.linkedin.com/in/lance-hemphill-250b85218/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					class="hover:text-accent transition-colors"
				>
					<Icon icon="mdi:linkedin" class="h-6 w-6" />
				</a>
				<a
					href="mailto:lancehemphill2000@gmail.com"
					aria-label="Email"
					class="hover:text-accent transition-colors"
				>
					<Icon icon="mdi:email" class="h-6 w-6" />
				</a>
			</div>
		</header>

		<div class="space-y-16 pt-16 lg:col-span-7 lg:pt-4">
			<section id="about" class="scroll-mt-24 space-y-4">
				<h2 class="text-accent text-xl font-bold tracking-widest uppercase">About</h2>
				<p class="font-light">
					Results-oriented Full-Stack Developer with experience in building and deploying robust web
					applications. Proficient in modern frameworks (React, Next.js, SvelteKit), backend
					technologies (Flask, Node.js), and cloud services (Docker, PostgreSQL, MongoDB,
					AWS/Cloudflare) for high-performance, scalable solutions.
				</p>
			</section>

			<section id="skills" class="scroll-mt-24 space-y-4">
				<h2 class="text-accent text-xl font-bold tracking-widest uppercase">Skills & Tools</h2>
				<div class="flex flex-wrap gap-2">
					<p class="badge badge-lg badge-outline">SvelteKit</p>
					<p class="badge badge-lg badge-outline">React</p>
					<p class="badge badge-lg badge-outline">TypeScript</p>
					<p class="badge badge-lg badge-outline">Python</p>
					<p class="badge badge-lg badge-outline">Flask</p>
					<p class="badge badge-lg badge-outline">PostgreSQL</p>
					<p class="badge badge-lg badge-outline">Tailwind CSS</p>
					<p class="badge badge-lg badge-outline">Figma</p>
					<p class="badge badge-lg badge-outline">Drizzle ORM</p>
					<p class="badge badge-lg badge-outline">REST APIs</p>
					<p class="badge badge-lg badge-outline">Better-Auth</p>
					<p class="badge badge-lg badge-outline">Docker</p>
				</div>
			</section>

			<section id="experience" class="scroll-mt-24 space-y-8">
				<h2 class="text-accent text-xl font-bold tracking-widest uppercase">Experience</h2>

				<div
					class="card bg-base-100 group transition-all duration-300 lg:group-hover/list:opacity-50 lg:hover:!opacity-100"
				>
					<div class="card-body">
						<div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
							<div>
								<h3 class="card-title text-xl">Founding Engineer · Tomorrow's AI</h3>
								<p class="text-base-content/70 text-sm">Oct 2024 – Jan 2025</p>
							</div>
							<div class="flex flex-wrap gap-2">
								<p class="badge badge-outline">React</p>
								<p class="badge badge-outline">Flask</p>
								<p class="badge badge-outline">Figma</p>
							</div>
						</div>
						<ul class="text-base-content/90 mt-4 list-disc space-y-2 pl-5">
							<li>
								Spearheaded the complete development lifecycle from conceptualization and
								architectural design to full-scale implementation and deployment.
							</li>
							<li>
								Engineered a full-stack solution by developing and deploying a Flask backend with
								RESTful APIs, which seamlessly integrated with a dynamic React frontend.
							</li>
							<li>
								Designed and prototyped high-fidelity UI/UX for Europe News Global using Figma,
								ensuring brand alignment and adhering to usability best practices.
							</li>
							<li>
								Developed reusable React components and optimized frontend caching with React Query
								to improve performance and state management.
							</li>
							<li>
								Managed the product development roadmap, tracking key milestones and providing
								regular status updates to upper management to ensure projects were completed on
								schedule.
							</li>
							<li>
								Designed and implemented a NoSQL database solution using Amazon DynamoDB to manage
								user data and application content like comments.
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section id="projects" class="scroll-mt-24 space-y-8">
				<h2 class="text-accent text-xl font-bold tracking-widest uppercase">Projects</h2>

				<div
					class="card card-body bg-base-100 transition-all duration-300 lg:group-hover/list:opacity-50 lg:hover:!opacity-100"
				>
					<div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
						<h3 class="card-title text-xl">Svelte-MOBAS</h3>
						<div class="flex flex-wrap gap-2">
							<p class="badge badge-outline">SvelteKit</p>
							<p class="badge badge-outline">Drizzle</p>
							<p class="badge badge-outline">Postgres</p>
							<p class="badge badge-outline">MinIO</p>
						</div>
					</div>
					<p class="text-base-content/90 mt-2">
						Svelte-MOBAS (MinIO, ORM (Drizzle), Better-Auth, SQL (Postgres)) is a full-stack
						template and tutorial for developers. The project includes a comprehensive <span
							class="text-base-content font-semibold">README</span
						> to guide users through setup, along with documented code.
					</p>
					<div class="card-actions mt-4 justify-start">
						<a
							href="https://github.com/LanceOS/Svelte-MOBAS"
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-neutral"
						>
							<Icon icon="mdi:github" class="mr-1 h-5 w-5" />
							GitHub
						</a>
					</div>
				</div>
			</section>
			<section id="extras" class="scroll-mt-24 space-y-8">
				<h2 class="text-accent text-xl font-bold tracking-widest uppercase">Extras</h2>

				<div
					class="card card-body bg-base-100 transition-all duration-300 lg:group-hover/list:opacity-50 lg:hover:!opacity-100"
				>
					<h3 class="card-title text-xl">Some music I listen to!</h3>
					<iframe
						title="spotify"
						style="border-radius:12px"
						src="https://open.spotify.com/embed/playlist/5LAdJ7VQWaz7WETDmymfmJ?utm_source=generator"
						width="100%"
						height="352"
						frameBorder="0"
						allowfullscreen={true}
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
				</div>
			</section>
		</div>
	</main>
</div>
