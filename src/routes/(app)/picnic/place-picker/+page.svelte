<script lang="ts">
	import { goto } from "$app/navigation";
	import { getActiveDate, type CharacterDescriptor } from "$lib/character";
	import { places, type Place } from "$lib/places";
	import { activeDate, activePlace, currentDay } from "$lib/stores";
	import { capitalize } from "$lib/utils";
	import { onMount } from "svelte";

	let dateInfo: CharacterDescriptor | undefined;
	onMount(() => {
		// Get active-date from local storage

		dateInfo = getActiveDate();
		if (!dateInfo) {
			// If there is no active-date, redirect to embark
			goto("/picnic/embark");
			return;
		}
	});

	function clickPlace(place: Place) {
		activePlace.set(place.name);
		goto("/picnic/date");
	}
</script>

<h2
	class="text-center text-2xl
			   hover:scale-125 transition-all self-center mt-8 rounded-2xl"
>
	Day {$currentDay}: Where are we taking {capitalize($activeDate)}?
</h2>
<div class="reggie h-56">
	<img src={dateInfo?.sprites.normal} alt={dateInfo?.name} />
</div>
<!-- Date place select slist -->
<div class="grid grid-cols-4 gap-8 self-center px-4">
	{#each places as datePlace}
		<button
			on:click={() => clickPlace(datePlace)}
			class="hover:scale-110 transition-all shadow-2xl"
		>
			<img src={datePlace.image} alt="date place" />
			<span>{datePlace.name}</span>
		</button>
	{/each}
</div>

<style>
	.reggie {
		animation: shake 2s alternate-reverse infinite;
	}

	@keyframes shake {
		0% {
			transform: translate(1px, 1px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, -2px) rotate(-1deg);
		}
		20% {
			transform: translate(-3px, 0px) rotate(1deg);
		}
		30% {
			transform: translate(3px, 2px) rotate(0deg);
		}
		40% {
			transform: translate(1px, -1px) rotate(1deg);
		}
		50% {
			transform: translate(-1px, 2px) rotate(-1deg);
		}
		60% {
			transform: translate(-3px, 1px) rotate(0deg);
		}
		70% {
			transform: translate(3px, 1px) rotate(-1deg);
		}
		80% {
			transform: translate(-1px, -1px) rotate(1deg);
		}
		90% {
			transform: translate(1px, 2px) rotate(0deg);
		}
		100% {
			transform: translate(1px, -2px) rotate(-1deg);
		}
	}
</style>
