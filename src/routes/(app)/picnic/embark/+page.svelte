<script lang="ts">
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
	import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";
	import Link from "$lib/components/Link.svelte";

	import { currentDay, playerName } from "$lib/stores";
	import type { SubmitFunction } from "@sveltejs/kit";

	let name: string = "";
	$: error = nameCheck(name);

	function nameCheck(name: string) {
		if (name === "") {
			return "You must enter a name!";
		} else if (name.length > 10) {
			return "Can your name be smaller please????";
		} else if (name.length === 1) {
			return `Your name is just... "${name}"?`;
		}
		return "";
	}

	const onEmbark: SubmitFunction = (o) => {
		if (error) {
			return;
		}

		// // Set name to local storage
		playerName.set(name);
		currentDay.set(1);
		goto("/picnic/date-picker");
	};
</script>

<h2 class="hover:scale-125 transition-all mt-8 text-2xl wiggle-2 delay-75">
	What is your name?
</h2>
<span class="flex-1"></span>
<span class="self-center text-center h-8 wiggle">
	{#if error}
		<span class="text-red-500">
			{error}
		</span>
	{:else}
		<span>
			Hello <span class="text-green-500">{name}</span>!<br />
		</span>
	{/if}
</span>
<span class="flex-1"></span>
<form class="flex flex-col gap-8 mb-8" method="post" use:enhance={onEmbark}>
	<Input bind:value={name} />
	<Button type="submit">Embark</Button>
</form>

<style>
	:root {
		--wiggle-offset: 2deg;
		--wiggle-magnitude: 0.5rem;
	}

	.wiggle {
		animation: wiggle 5s linear infinite alternate-reverse;
	}

	.wiggle-2 {
		animation: wiggle 5s linear infinite alternate-reverse;
		animation-delay: 500ms;
	}

	.wiggle-3 {
		animation: wiggle 5s linear infinite alternate-reverse;
		animation-delay: 1000ms;
	}

	/* 100/8 = 12.5 */

	/* Infinity 8 wiggle */
	@keyframes wiggle {
		/* Center */
		0% {
			rotate: calc(var(--wiggle-offset) * -1);
			transform: translateX(calc(var(--wiggle-magnitude) * -1));
		}

		25% {
			rotate: 0deg;
			transform: translateX(0);
		}

		50% {
			rotate: var(--wiggle-offset);
			transform: translateX(var(--wiggle-magnitude));
		}

		75% {
			rotate: 0deg;
			transform: translateX(0);
		}

		100% {
			rotate: calc(var(--wiggle-offset) * -1);
			transform: translateX(calc(var(--wiggle-magnitude) * -1));
		}
	}
</style>
