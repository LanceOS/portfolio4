<script>
	import Header from '$lib/components/header/Header.svelte';
	import DeskNav from '$lib/components/navbar/DeskNav.svelte';
	import MobileNav from '$lib/components/navbar/MobileNav.svelte';
	import Spotify from '$lib/tools/Spotify.js';
	import { onMount } from 'svelte';

	let mobile = $state(false);
	let spotifyTrack = $state({})

	const checkIsMobile = () => {
		if (typeof window !== 'undefined') {
			mobile = window.innerWidth < 768;
		}
	};

	onMount(() => {
		checkIsMobile();
		window.addEventListener('resize', checkIsMobile);
		return () => {
			window.removeEventListener('resize', checkIsMobile);
		};


	});
</script>

{#if mobile}<MobileNav />{:else}<DeskNav />{/if}
<main class="bg-base-100 text-base-content relative px-4 py-32">
	<div class="mx-auto flex max-w-6xl flex-col gap-12">
		<Header />
	</div>
</main>
