<script>
	import Header from '$lib/components/header/Header.svelte';
	import MobileNav from '$lib/components/navbar/MobileNav.svelte';
</script>

<main class="bg-base-100 text-base-content relative px-4 py-32">
	<MobileNav />
	<div class="mx-auto flex max-w-6xl flex-col gap-12">
		<Header />
	</div>
</main>
