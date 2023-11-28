<script>
</script>

<a href="#/" {...$$restProps}>
	<slot />
</a>

<style>
	a {
		text-align: center;
		--grad-color: rgb(255, 242, 242);
		padding: 0.5rem 2rem;
		transition: all 0.1s ease-in-out;
		background: linear-gradient(
			to right,
			oklab(0 0 0 / 0) 0%,
			var(--grad-color) 20%,
			var(--grad-color) 80%,
			oklab(0 0 0 / 0) 100%
		);
		background-blend-mode: overlay;
		border-width: 0rem;
		outline-style: solid;
		outline-color: transparent;
	}

	a:hover {
		outline-width: 0.5rem;
		outline-color: #ff8fab;
	}

	a:focus-within {
		outline-width: 0.5rem;
		outline-color: #ff8fab;
	}
</style>
