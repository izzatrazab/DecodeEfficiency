<script>
	// @ts-check

	import randomWords from 'random-words';
	import { onMount } from 'svelte';

	/** @type {number} : Duration of the typing test.*/
	const DURATIONS = 60;

	/** @type {number} */
	let sec = DURATIONS;

	/** @type {boolean} : Flag to indicate whether the test is started or not.*/
	let start = false;

	/** @type {string[]}*/
	let words = [];

	/** @type {{ typed: string; class: string }[]}*/
	let typed_words = [];

	/** @type {string} : bind to the user input*/
	let input = '';

	/** @type {boolean} : correctness of input varible*/
	let correct = false;

	let currentWord = '';
	let currentDisplay = '';

	let wordCount = 0;
	let trueCharacterCount = 0;
	let characterCount = 0;

	let totalKeyPressed = 0;
	let totalCorrectKeyPressed = 0;
	// let accuracy = 0;

	/**
	 * @type {boolean} : score dialog flag. used when to open/close the score dialog
	 */
	let scoreDialog = false;

	let editableSpanElement;

	onMount(() => {
		editableSpanElement = document.getElementById('editable');
		words = randomWords(200);
		currentWord = words[0];
		currentDisplay = words[0];
		editableSpanElement.focus();
	});

	function countDown() {
		start = true;
		let timer = setInterval(() => {
			sec--;
			if (sec === 0) {
				clearInterval(timer);
				editableSpanElement.setAttribute('contenteditable', 'false');
				window.addEventListener('keydown', preventSpacebarScrolling);
				scoreDialog = true;
				cleanup();
			}
		}, 1000);
	}

	function cleanup() {
		input = '';
		typed_words = [];
		words = randomWords(200);
		currentWord = words[0];
		currentDisplay = words[0];
		start = false;
		sec = DURATIONS;
	}

	function restart() {
		window.removeEventListener('keydown', preventSpacebarScrolling);
		totalKeyPressed = 0;
		totalCorrectKeyPressed = 0;
		// accuracy = 0;
		wordCount = 0;
		trueCharacterCount = 0;
		characterCount = 0;
		editableSpanElement.setAttribute('contenteditable', 'true');
		editableSpanElement.focus();
		scoreDialog = false;
	}

	function preventSpacebarScrolling(e) {
		if (e.keyCode == 32 && e.target == document.body) {
			e.preventDefault();
		}
	}

	function detectStart(e) {
		if (input.length === 1 && e.data !== null) {
			countDown();
			onInput(e);
		}

		if (e.data == ' ') check();
	}

	function check() {
		input = input.trimEnd();
		let temp = 'typo';
		if (currentWord == input) {
			temp = 'correct';
			wordCount++;
			characterCount += currentWord.length;
			trueCharacterCount += currentWord.length;
		} else {
			let temp = 0;
			for (let index = 0; index < currentWord.length; index++) {
				if (currentWord[index] !== input[index]) break;
				temp++;
			}
			trueCharacterCount += temp;
		}
		let word = {
			typed: input,
			class: temp
		};
		typed_words = [...typed_words, word];
		input = '';
		words = words.slice(1);
		currentWord = words[0];
		currentDisplay = words[0];
		// console.log(totalCorrectKeyPressed + ' : ' + totalKeyPressed);
		// accuracy = Math.trunc((totalCorrectKeyPressed / totalKeyPressed) * 100);
	}

	function onInput(e) {
		if (e.inputType === 'insertParagraph') e.preventDefault();
		totalKeyPressed++;

		if (e.data === ' ') check();

		// charCodeAt(0) == 10 is line feed unicode '\n'
		// somehow when hit backspace (if input already has a character), input variable a line feed unicode. I don't know why its not a normal empty
		if (currentWord.startsWith(input) || input.charCodeAt(0) == 10) {
			if (
				e.inputType == 'deleteContentBackward' ||
				e.inputType == 'deleteContentForward' ||
				e.inputType == 'deleteByCut'
			) {
				if (!correct) {
					totalCorrectKeyPressed++;
				}
			} else {
				totalCorrectKeyPressed++;
			}
			correct = true;
			currentDisplay = currentWord.replace(input, '');
			return;
		}
		correct = false;
	}
</script>

<section class="container">
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
			<!-- <div>
				<div>{accuracy}</div>
				% accuracy
			</div> -->
		</div>
		<div id="count-down">
			<span>{sec}</span>
			seconds
		</div>
	</div>
	<!-- {totalCorrectKeyPressed}/{totalKeyPressed} -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div id="typing" on:keydown on:click={editableSpanElement.focus()}>
		<div id="typed">
			{#each typed_words as p}
				<span class={p.class}>{p.typed}</span>
			{/each}
			<span
				id="editable"
				contenteditable
				spellcheck="false"
				autocapitalize="none"
				autocorrect="off"
				class={correct ? 'correct' : 'typo'}
				bind:innerText={input}
				on:paste={(e) => e.preventDefault()}
				on:input={start ? (e) => onInput(e) : detectStart}
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						e.preventDefault();
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
	<dialog open={scoreDialog}>
		<article>
			<p>
				Awesome! You type with the speed of
				<strong>{characterCount / 5}WPM ({trueCharacterCount}CPM)</strong>.
				<br />
				<!-- Your accuracy was <strong>{accuracy}%</strong>. -->
				Congratulations!
			</p>
			<br />
			<input type="button" value="Try Again" on:click={restart} />
		</article>
	</dialog>
</section>

<style>
	section {
		text-align: center;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
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

	#new-sentence {
		text-align: left;
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
		color: var(--pico-primary);
	}

	article > p > strong {
		font-size: x-large;
		color: var(--pico-primary);
	}
</style>
