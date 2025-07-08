<script>
	import MobileNav from '$lib/components/navbar/MobileNav.svelte';
	import Spotify from '$lib/tools/Spotify.js';
	import { animate } from "animejs";
	import { onMount } from 'svelte';

	let mobile = $state(false);
	let spotifyTrack = $state({})

	let firstName;
	let lastName;


	onMount(() => {
		animate(firstName, {
			duration: 600,
			translateY: ['10rem', '0rem'],
                opacity: [0, 1],
                easing: 'easeOutQuad'
		})

		animate(lastName, {
			duration: 600,
			delay: 200,
			translateY: ['10rem', '0rem'],
                opacity: [0, 1],
                easing: 'easeOutQuad'
		})
	});
</script>

<MobileNav />
<main class="bg-base-100 text-base-content p-6 relative">

	<section class="flex flex-col gap-12 justify-between">
		<h1 class="text-4xl md:text-[5rem] lg:text-[20rem] leading-72 h-fit" bind:this={firstName}>Lance</h1>
		<h1 class="text-4xl md:text-[5rem] lg:text-[20rem] leading-72 h-fit" bind:this={lastName}>Hemphill</h1>
	</section>

	<section>
		<img src="/images/selfie.jpg" alt="" class="w-64">
	</section>
</main>
