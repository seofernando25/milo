<script lang="ts">
	import { goto } from "$app/navigation";
	import {
		characters,
		getActiveDate,
		type CharacterDescriptor,
	} from "$lib/character";
	import Button from "$lib/components/Button.svelte";
	import { DateManager } from "$lib/dateState";
	import {
		activeDate,
		activePlace,
		currentDay,
		currentText,
	} from "$lib/stores";
	import { onMount } from "svelte";
	import { get } from "svelte/store";

	let dateInfo = {
		name: "",
		place: "",
		day: 0,
	};

	let charInfo: CharacterDescriptor | undefined;

	const state = new DateManager();

	onMount(() => {
		const dateName = $activeDate;
		const datePlace = $activePlace;
		const dateDay = $currentDay;

		dateInfo = {
			name: dateName,
			place: datePlace,
			day: dateDay,
		};

		const characterData = characters.find((c) => c.name === dateName);
		if (!characterData) {
			goto("/picnic/embark");
			return;
		}
		const info = characterData.dateInfo;
		charInfo = getActiveDate();

		// info[day][place]
		const day = info[dateDay];
		if (!day) {
			// location.href = "/picnic/embark";
			console.log("day not found");
			return;
		}

		const gameSeq = day[datePlace];
		if (!gameSeq) {
			// location.href = "/picnic/embark";
			console.log("place not found", datePlace);
			return;
		}

		gameSeq(state);
	});

	function dateSpriteStateChange(
		charInfo: CharacterDescriptor | undefined,
		state: string,
	) {
		// normal angry blush gift
		if (state === "normal") {
			return charInfo?.sprites.normal;
		} else if (state === "angry") {
			return charInfo?.sprites.angry;
		} else if (state === "blush") {
			return charInfo?.sprites.blush;
		} else if (state === "gift") {
			return charInfo?.sprites.gift;
		}
		return charInfo?.sprites.normal;
	}

	$: speaker = state.currentSpeaker;
	$: characterOpacity = state.dateOpacity;
	$: dateSpriteState = state.dateSprite;
	$: dateSprite = dateSpriteStateChange(charInfo, $dateSpriteState);
	$: prompts = state.prompts;

	function skipAction() {
		const w = state.resolverFn;
		get(w)();
	}
</script>

<div class="absolute top-0 left-0 bg-white/50 p-1">
	Date Day: {dateInfo.day}
	<br />
	Date Name: {dateInfo.name}
	<br />
	Date Place: {dateInfo.place}
</div>

<span class="flex-1"></span>

{#if $prompts}
	<div class="absolute top-0 flex gap-4 pt-4">
		{#each $prompts as prompt, i}
			<Button
				on:click={() => {
					state.pickedPrompt.set(i);
				}}>{prompt}</Button
			>
		{/each}
	</div>
{/if}

<div
	class="absolute -z-10 w-full h-full flex flex-col place-items-center"
	style="opacity: {$characterOpacity}"
>
	<img
		class="absolute bottom-16 w-[13rem]"
		src={dateSprite}
		alt={dateInfo?.name}
	/>
	<img
		class="absolute bottom-16 w-[13rem] translate-x-2 translate-y-2 img-backdrop -z-10"
		src={dateSprite}
		alt={dateInfo?.name}
	/>
</div>

<!-- Panel Prompt -->
<div class="w-full p-4">
	{#if $speaker}
		<div class="text-center bg-white/25 w-24 p-2">
			{$speaker}
		</div>
	{/if}
	<button
		on:click={skipAction}
		class="flex w-full bg-white/25 p-4 h-32 text-black"
	>
		{$currentText}
	</button>
</div>

<style>
	.img-backdrop {
		filter: brightness(0);
	}
</style>
