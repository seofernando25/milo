<script lang="ts">
	import { placeFromName } from "$lib/places";
	import { activeDate, activePlace } from "$lib/stores";

	$: place = placeFromName($activePlace);
</script>

<div class="absolute overflow-clip w-full h-full -z-10">
	{#if place?.image}
		<img
			src={place?.image}
			alt="date place"
			class="w-full h-full object-cover blur-in"
		/>
	{/if}
</div>
<div class="flex flex-col place-items-center h-screen">
	<slot />
</div>

<style>
	.blur-in {
		animation: blur-in 1s ease-in forwards;
	}

	@keyframes blur-in {
		0% {
			filter: blur(12px);
			scale: 1.1;
		}
		100% {
			filter: blur(0px);
			scale: 1;
		}
	}
</style>
