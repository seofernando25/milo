<script lang="ts">
	import { characters } from "$lib/character";
	import CharacterCard from "./CharacterCard.svelte";
	import { activeDate } from "$lib/stores";
	import { goto } from "$app/navigation";

	function clickDate(name: string) {
		activeDate.set(name);
		goto("/picnic/place-picker");
	}
</script>

<h2 class="hover:scale-125 transition-all mt-8 text-2xl rounded-2xl">
	Day 1: Pick your date
</h2>

<!-- Date place select slist -->
<div class="flex flex-wrap justify-around gap-8 self-center px-4 mt-4">
	{#each characters as character}
		<CharacterCard {character} on:click={() => clickDate(character.name)} />
	{/each}
</div>
