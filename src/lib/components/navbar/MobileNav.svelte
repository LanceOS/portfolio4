<script>
	import { goto } from '$app/navigation';

	let open = $state(false);
</script>

<button
	class={`absolute top-6 right-6 z-20 flex h-6 w-10 cursor-pointer flex-col justify-between duration-300 ${open ? 'rotate-180' : ''}`}
	type="button"
	aria-label="Open Navbar"
	onclick={() => (open = !open)}
>
	<div class={`h-1 w-full bg-white duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`}></div>
	<div class={`h-1 w-full bg-white duration-200 ${open ? 'opacity-0' : ''}`}></div>
	<div class={`h-1 w-full bg-white duration-200 ${open ? '-translate-y-3 -rotate-45' : ''}`}></div>
</button>

<section
	class={`bg-base-200 absolute top-0 right-0 z-10 flex h-dvh flex-col items-center justify-center gap-12 overflow-x-hidden duration-200 ${open ? 'w-90' : 'w-0'}`}
>
	<nav class={`${open ? 'block' : 'hidden'}`}>
		<button
			type="button"
			aria-label="Go to sign in page"
			onclick={() => goto('/signin')}
			class="link">Sign In</button
		>
	</nav>
</section>
