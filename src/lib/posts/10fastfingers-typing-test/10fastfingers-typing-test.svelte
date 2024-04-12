<script>

	import randomWords from 'random-words';
	import IconReload from '$lib/logo/reload.svelte'
	import { onMount } from 'svelte';

	let words = []
	let curWord = ''
	let start = false
	let sec = 60
	let input = ''

	onMount(()=>{
		words = randomWords(200)
		curWord = [0];
	})

	function countDown() {
		let timer = setInterval(() => {
			sec--;
			if (sec === 0) {
				//remove the words
				clearInterval(timer);
			}
		}, 1000);
	}

	function detectStart(){
		start = true;
		countDown();
	}

	function onKeydown(e){
		if(e.key === 'Enter')
			e.preventDefault()
	}
	function onInput(e){
		console.log(e.data);
		// console.log(input)
	}


</script>

<section class="container">
	<div class="test-words">
		{#each words as word}
			<span>{word}</span>&nbsp;
		{/each}
	</div>
	{input}
	<div class="input-field">
		<input type="text" style=" max-width: 400px"
		bind:value={input}
		on:keydown={(event) => onKeydown(event)}
		on:input={ start ? (event) => onInput(event) : detectStart()}
		/>
		<button class="secondary">{sec}</button>
		<button class="primary">
			<IconReload/>
		</button>
	</div>
</section>

<style>
	.test-words {
		background-color: var(--pico-card-background-color);
		padding: 8px;
		margin-bottom: 8px;
	}

	.test-words > span{
		display: inline-block;
	}
	.input-field {
		background-color: var(--pico-card-background-color);
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 4px;
		height: 72px;
	}

	.input-field > * {
		margin: 4px;
		max-height: 100%;
	}
	button.primary {
		padding: 10px;
        height: 56px;
        width: 56px;
		aspect-ratio: 1;
	}
</style>
