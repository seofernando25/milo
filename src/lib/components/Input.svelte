<script lang="ts">
	export let value = "";
</script>

<input on:submit autocomplete="off" bind:value {...$$restProps} />

<style>
	input {
		text-align: center;
		width: 100%;
		font-size: 1.5rem;
		line-height: 2rem;
		border-radius: 1rem;
		background: rgb(255, 242, 242);
		outline-style: solid;
		outline-color: #ff8fab;
		transition: all 0.1s ease-in-out;
	}

	input:hover {
		outline-width: 0.5rem;
		outline-color: #ff8fab;
	}

	input:focus-within {
		outline-width: 0.5rem;
		outline-color: #ff8fab;
	}
</style>
