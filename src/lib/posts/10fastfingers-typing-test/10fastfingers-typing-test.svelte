<script>
	// @ts-check

	import randomWords from 'random-words';
	import reloadIcon from '$lib/posts/10fastfingers-typing-test/reload-svgrepo-com.svg';
	import { onMount } from 'svelte';

	let words = []

	onMount(()=>{
		words = randomWords(200)
	})
</script>

<section class="container">
	<div class="test-words">
		{#each words as word}
			<span>{word}</span>
		{/each}
	</div>
	<br>
	<div class="scoreboard">
		<input type="text" style=" max-width: 400px" />
		<button class="secondary">timer</button>
		<button class="primary">
			<img src={reloadIcon} alt="" style="" />
		</button>
	</div>
</section>

<style>
	.test-words {
		background-color: var(--pico-card-background-color);
	}

	.test-words > span{
		padding:2em;
	}
	.scoreboard {
		background-color: var(--pico-card-background-color);
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 4px;
		height: 72px;
	}

	.scoreboard > * {
		margin: 4px;
		max-height: 100%;
	}
	button.primary {
		padding: 10px;
        height: 56px;
        width: 56px;
	}
	button.primary > img {
		/* aspect-ratio: 1/1; */
		max-height: 100%;
	}
</style>
