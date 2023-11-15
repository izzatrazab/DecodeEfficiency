<script lang="ts">
	import randomWords from 'random-words'
	import { onMount } from 'svelte'

	const durationSeconds: number = 60
	let seconds: number = durationSeconds
	let start: boolean = false

	let words: string[] = []
	let typedWords: { typed: string; class: string }[] = []
	let input: string = ''
	let currentWord: string = ''
	let currentDisplay: string = ''

	let wordCount: number = 0
	let trueCharacterCount: number = 0
	let characterCount: number = 0

	let totalKeyPressed: number = 0
	let totalCorrectKeyPressed: number = 0
	let accuracy: number = 0

	let scoreDialog: boolean = false
	let editableSpanElement: HTMLSpanElement

	onMount(() => {
		editableSpanElement = document.getElementById('editable') as HTMLSpanElement
		words = randomWords(10)
		currentWord = words[0]
		currentDisplay = words[0]
		editableSpanElement.focus()
	})

	function countDown() {
		start = true
		let timer = setInterval(() => {
			seconds--
			if (seconds === 0) {
				clearInterval(timer)
				editableSpanElement.setAttribute('contenteditable', 'false')
				window.addEventListener('keydown', preventSpacebarScrolling)
				scoreDialog = true
				cleanup()
			}
		}, 1000)
	}

	function cleanup() {
		input = ''
		typedWords = []
		words = randomWords(10)
		currentWord = words[0]
		currentDisplay = words[0]
		start = false
		seconds = durationSeconds
	}

	function restart() {
		window.removeEventListener('keydown', preventSpacebarScrolling)
		totalKeyPressed = 0
		totalCorrectKeyPressed = 0
		accuracy = 0
		wordCount = 0
		trueCharacterCount = 0
		characterCount = 0
		editableSpanElement.setAttribute('contenteditable', 'true')
		editableSpanElement.focus()
		scoreDialog = false
	}

	function preventSpacebarScrolling(e: any) {
		if (e.keyCode == 32 && e.target == document.body) {
			e.preventDefault()
		}
	}

	function onKeydown(e: any) {
		if (!start) countDown()
		if (
			e.key === 'Enter' ||
			((e.key === ' ' || e.keyCode === 32 || e.which === 32) && input === '') ||
			(e.key === 'Backspace' && input === '')
		) {
			e.preventDefault()
			return
		}
		if (e.key !== 'Backspace') {
			totalKeyPressed++
			return
		}
	}
	
	function onInput(e: any) {
		if (e.data === ' ' && input !== ' ') {
			input = input.trimEnd()
			e.preventDefault()
			let temp = 'typo'
			if (currentWord == input) {
				temp = 'correct'
				wordCount++
				characterCount += currentWord.length
				trueCharacterCount += currentWord.length
			} else {
				let temp = 0
				for (let index = 0; index < currentWord.length; index++) {
					if (currentWord[index] !== input[index])
					break
					temp++
				}
				trueCharacterCount += temp
			}
			let word = {
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
			accuracy = Math.trunc((totalCorrectKeyPressed / totalKeyPressed) * 100)
			return
		}
		// need to check
		if (currentWord.startsWith(input)) {
			totalCorrectKeyPressed++
			currentDisplay = currentWord.replace(input, '')
		}
	}
</script>

<section>
	<p>Test your typing skills</p>
	<div id="scoreboard">
		<div id="readings">
			<div>
				<div>{trueCharacterCount}</div>
				<span>chars/min</span>
			</div>
			<div>
				<div>{wordCount}</div>
				words/min
			</div>
			<div>
				<div>{accuracy}</div>
				% accuracy
			</div>
		</div>
		<div id="count-down">
			<span>{seconds}</span>
			seconds
		</div>
	</div>
	<div
		id="typing"
		on:keydown
		on:click={() => {
			editableSpanElement.focus()
		}}
	>
		<div id="typed">
			{#each typedWords as p}
				<span class={p.class}>{p.typed}</span>
			{/each}
			<span
				id="editable"
				contenteditable
				spellcheck="false"
				autocapitalize="none"
				autocorrect="off"
				class={currentWord.startsWith(input) ? 'correct' : 'typo'}
				bind:innerText={input}
				on:paste={(e) => e.preventDefault()}
				on:keydown={(e) => onKeydown(e)}
				on:input={(e) => onInput(e)}
			/>
			<br />
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
	<dialog open={scoreDialog}>
		<article>
			<p>
				Awesome! You type with the speed of
				<strong>{characterCount / 5}WPM ({trueCharacterCount}CPM)</strong>.
				<br />
				Your accuracy was <strong>{accuracy}%</strong>. Congratulations!
			</p>
			<br />
			<input type="button" value="Try Again" on:click={() => restart()} />
		</article>
	</dialog>
</section>

<style>
	section {
		text-align: center;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	#scoreboard {
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: wrap;
		justify-content: center;
		gap: 15px;
		font-size: small;
	}

	#count-down {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100px;
		aspect-ratio: 1;
		border-radius: 50%;
		border-style: solid;
		border-color: #ff3e00;
	}

	#count-down > span {
		font-size: 2rem;
		line-height: 1.5rem;
	}

	#readings {
		display: flex;
		text-align: center;
		align-items: center;
	}

	#readings > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 5rem;
	}

	#readings > div > div {
		border-radius: 10px;
		width: 70%;
		aspect-ratio: 1;
		background-color: var(--card-background-color);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: x-large;
	}

	#typed {
		display: flex;
		justify-content: end;
	}

	#typed > span {
		padding-left: 8px;
	}

	#new-sentence > span {
		padding-right: 8px;
	}

	#editable {
		display: inline-block;
		outline: 0;
	}

	#typing {
		margin: 20px auto 0 auto;
		box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.25);
		overflow: hidden;
		border-style: solid;
		border-width: 1px;
		border-radius: 10px;
		display: grid;
		grid-template-columns: 50% 50%;
		white-space: nowrap;
		line-height: 3.5;
		font-size: x-large;
	}
	.typo {
		text-decoration: line-through;
		color: #ababb0;
	}

	.correct {
		color: var(--primary);
	}

	article > p > strong {
		font-size: x-large;
		color: var(--primary);
	}
</style>
