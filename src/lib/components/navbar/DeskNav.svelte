<script>
	import Spotify from "$lib/tools/Spotify.js";
	import { onMount } from "svelte";

	let spotifyTrackData = $state()

	onMount(() => {
		const fetch = async() => {
			const data = await Spotify.getCurrentTrack();
			spotifyTrackData = data;
			console.log(data)
		}

		fetch()

	});
</script>


<header class="w-full py-6">
	<div class="max-w-6xl mx-auto flex justify-between items-center">
		<nav class="w-fit">
			<button type="button" aria-label="Sign In" class="btn">Sign In</button>
		</nav>
	
		{#if spotifyTrackData}
			<iframe style="border-radius:12px" src={spotifyTrackData.item.href} title="title"
			height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy" class="relative w-92"></iframe>
		{/if}

	</div>

</header>
