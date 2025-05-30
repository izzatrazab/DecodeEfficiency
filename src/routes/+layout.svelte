<script>
	import Github from '$lib/logo/github.svelte';
	import { categories } from '$lib/types';
	// import '@picocss/pico/css/pico.jade.min.css';
	// import '@picocss/pico/css/pico.lime.min.css';
	// import '@picocss/pico/css/pico.min.css';
	import '@picocss/pico/css/pico.orange.min.css';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
	// import '@picocss/pico/css/pico.pink.min.css';
	let dialog = $state(false);
</script>

<header>
	<nav class="container">
		<ol>
			<li class="home">
				<a href="/" title="HOME">DECODING EFFICIENCY</a>
			</li>
			<li class="filter">
				<button class="secondary" onclick={() => (dialog = true)}> CATEGORY </button>
			</li>
		</ol>
	</nav>
</header>
<main class="container">
	{@render children?.()}
</main>
<dialog open={dialog}>
	<div class="card" id="category-card">
		<header>
			<span><strong>Categories:</strong></span>
			<button class="secondary" onclick={() => (dialog = false)}> ✕ </button>
		</header>
		<div>
			{#each categories as category}
				<a href="/category/{category}" role="button" onclick={() => (dialog = false)}>
					{category}
				</a>
			{/each}
		</div>
	</div>
</dialog>

<footer>
	<div class="container" id="footer">
		<small>
			Built using
			<a
				href="https://svelte.dev"
				target="_blank"
				rel="noreferrer"
				style="color:#FF6432; text-shadow:0 0 1px #FF835A"
			>
				Sveltekit
			</a>.
		</small>
		<div>
			<Github size={40} />
		</div>
	</div>
</footer>

<style>
	nav {
		justify-content: center;
	}
	ol {
		width: 100%;
		font-size: medium;
		font-weight: 700;
		text-align: center;
		position: relative;
	}
	.home {
		display: inline-block;
		position: relative;
	}
	.filter {
		position: absolute;
		right: 0;
	}
	.filter > button {
		background: none;
		border: 0;
		padding: 0;
		font-size: inherit;
		font-weight: inherit;
	}
	main {
		margin-top: 16px;
		flex-grow: 1;
	}
	footer {
		padding-top: 18px;
		padding-bottom: 18px;
	}

	footer > div {
		margin-bottom: 0;
	}

	#footer {
		display: flex;
	}
	#footer > small {
		flex: 0.8;
	}
	#footer > div {
		flex: 0.2;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		align-items: center;
	}
	#category-card {
		aspect-ratio: 1;
		max-width: 400px;
		border-radius: var(--border-radius);
	}
	#category-card > header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}
	#category-card > header > button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
		height: 20px;
		margin: 0;
		aspect-ratio: 1;
		border-radius: 50%;
		border: none;
		font-weight: bolder;
		background: none;
	}

	#category-card > div {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	@media (max-width: 400px) {
		ol {
			display: flex;
			justify-content: space-between;
		}
		.filter {
			position: static;
		}
	}
</style>
