<script lang="ts">
	import header from "$lib/assets/header.png";
	import Link from "../lib/components/Link.svelte";

	import { currentHowl, playSong } from "$lib/sound";
	import { onMount } from "svelte";
	import { get } from "svelte/store";
	onMount(() => {
		if (get(currentHowl)) return;
		playSong("The Picnic Bop");
	});
</script>

<div class="w-full h-screen flex flex-col items-center place-content-center">
	<header class="grid-stack">
		<img src={header} alt="header" class="header grid-stack-element header" />
	</header>

	<div class="flex flex-col gap-4 place-items-center">
		<Link href="/picnic">Find Love</Link>
		<Link href="/home">About me</Link>
	</div>
</div>

<style>
	/* Header has a white glow */
	.header {
		filter: drop-shadow(0 0 4px rgb(203, 167, 167)) drop-shadow(0 0 1px white);
	}
</style>
