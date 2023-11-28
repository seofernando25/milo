<script lang="ts">
	import type { CharacterDescriptor } from "$lib/character";

	export let character: CharacterDescriptor;

	let blushing = false;

	function capitalize(str: string) {
		return str[0].toUpperCase() + str.slice(1);
	}

	function setBlush() {
		blushing = true;
	}

	function removeBlush() {
		blushing = false;
	}
</script>

<button
	on:click
	on:mousedown={setBlush}
	on:mouseenter={setBlush}
	on:mouseleave={removeBlush}
	on:blur={removeBlush}
	on:focus={setBlush}
	class="hover-shake hover:scale-110 transition-all shadow-2xl"
	{...$$restProps}
>
	<div class="h-48 w-32">
		<img
			src={character.sprites.blush}
			alt="date place"
			class="h-48 w-32"
			style="display: {blushing ? 'block' : 'none'}"
		/>
		<img
			src={character.sprites.normal}
			alt="date place"
			class="h-48 w-32"
			style="display: {blushing ? 'none' : 'block'}"
		/>
	</div>
	<span>{capitalize(character.name)}</span>
</button>

<style>
	.hover-shake:hover {
		animation: shake 0.5s;
		animation-iteration-count: infinite;
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
