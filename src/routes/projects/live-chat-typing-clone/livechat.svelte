<script lang="ts">
	import { onMount } from 'svelte'
	import randomWords from 'random-words'
	import reload from '$lib/images/reload.svg'

	let words: string[] = []
	let typedWords: { typed: string; class: string }[] = []
	let input: string = ''
	let currentWord: string = ''
	// currentDisplay store/display suffix(substring at the end) of currentWord
	let currentDisplay: string = ''
	let wordCount: number = 0
	let characterCount: number = 0
	let start = false
	let seconds = 60

	onMount(() => {
		console.log('here')
		words = randomWords(10)
		currentWord = words[0]
		currentDisplay = words[0]
	})

	let countDown = function () {
		start = true
		let timer = setInterval(() => {
			seconds--
			if (seconds === 0) {
				clearInterval(timer)
				document.getElementById('editable')?.setAttribute('contenteditable', 'false')
				document.getElementById('score-overlay')?.setAttribute('style', 'visibility:visible')
			}
		}, 1000)
	}
</script>

<svelte:head>
	<title>Typing Test</title>
	<meta name="description" content="About this app" />
</svelte:head>
<section id="typing-test-page">
	<h1>Test your typing skills</h1>
	<div id="score">
		<div id="readings">
			<div>{characterCount}</div>
			<span>chars/min</span>
		</div>
		<div id="readings">
			<div>{wordCount}</div>
			<span>words/min</span>
		</div>
		<div id="countDown">
			<span id="seconds">{seconds}</span>
			<span>seconds</span>
		</div>
		<button id="reload" on:click={() => location.reload()}>
			<img src={reload} alt="Reload Page" />
		</button>
	</div>

	<div id="typing-container">
		<div id="score-overlay">
			<span>wpm: {characterCount / 5}</span>
			<span>word count: {wordCount}</span>
			<span>character count: {characterCount}</span>
		</div>
		<div
			id="typing"
			on:click={() => {
				document.getElementById('editable')?.focus()
			}}
			on:keydown
		>
			<div id="typed">
				{#each typedWords as p}
					<span class={p.class}>{p.typed}</span>
				{/each}
				<span
					contenteditable="true"
					id="editable"
					spellcheck="false"
					data-focus=""
					autocapitalize="none"
					class={currentWord.startsWith(input) ? '' : 'wrong'}
					bind:textContent={input}
					on:paste={(e) => e.preventDefault()}
					on:keydown={(e) => {
						if (!start) countDown()
						if (
							e.key === 'Enter' ||
							((e.key === ' ' || e.keyCode === 32 || e.which === 32) && input === '') ||
							(e.key === 'Backspace' && input === '')
						) {
							e.preventDefault()
							return
						}

						if (e.key == ' ' && input !== ' ') {
							e.preventDefault()
							let temp = 'wrong'
							if (currentWord == input) {
								temp = ''
								wordCount++
								characterCount += currentWord.length
							}
							const word = {
								typed: input,
								class: temp
							}
							typedWords = [...typedWords, word]
							input = ''
							words = words.slice(1)
							currentWord = words[0]
							currentDisplay = words[0]
							if (words.length <= 15) {
								words = [...words, ...randomWords(10)]
							}
							return
						}
					}}
					on:input={() => {
						if (currentWord.startsWith(input)) {
							currentDisplay = currentWord.replace(input, '')
						}
					}}
				/>
			</div>

			<div id="new-sentence">
				{#each words as pword, i}
					{#if i == 0}
						<span>{currentDisplay}</span>
					{:else}
						<span>{pword}</span>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	#typing-test-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: Consolas, monaco, monospace;
	}

	#score {
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	#countDown {
		border-radius: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100px;
		aspect-ratio: 1/1;
		border-style: solid;
		border-color: #ff3e00;
		font-size: medium;
	}
	#countDown span {
		line-height: 1;
	}

	#countDown #seconds {
		font-size: 2rem;
	}

	#readings {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#readings > div {
		flex-grow: 1;
	}
	#typed {
		display: flex;
		justify-content: end;
		color: #ababb0;
	}

	#typed > span {
		padding-left: 8px;
	}

	#new-sentence > span {
		padding-right: 8px;
	}

	#typing-container {
		max-width: 80%;
		min-width: 80%;
		margin-top: 20px;
		position: relative;
	}
	#typing-container > div {
		border-radius: 10px;
	}
	#typing {
		border-style: solid;
		border-width: 1px;
		display: grid;
		grid-template-columns: 50% 50%;
		white-space: nowrap;
		padding-right: 20px;
		padding-left: 20px;
		line-height: 3.5;
		font-size: 1.8rem;
		border-color: var(--color-theme-1);
		background: var(--color-bg-2);
		color: var(--color-text);
		box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.25);
	}

	#score-overlay {
		position: absolute;
		min-height: 100%;
		min-width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		background: rgba(255, 255, 255, 0.8);
		visibility: hidden;
	}

	#typing > div {
		overflow: hidden;
	}

	#editable {
		caret-color: black;
		caret-color: rgb(255, 185, 129);
		background: none;
		outline: none;
		border-width: 0px;
		padding: 0;
		width: auto;
		color: var(--color-theme-1);
		white-space: nowrap;
	}
	.wrong {
		text-decoration: line-through;
	}

	#reload {
		background: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		padding: 0;
		cursor: pointer;
	}

	#reload > img {
		aspect-ratio: 1;
		height: 2.5rem;
	}
</style>
