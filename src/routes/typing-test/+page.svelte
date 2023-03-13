<script lang="ts">
  import { onMount } from "svelte";
  import randomWords from "random-words";
  import reload from "$lib/images/reload.svg";

  let sentences: string[] = [];
  let typedSentences: { typed: string; class: string }[] = [];
  let input: string = "";
  let currentSentence: string = "";
  // currentDisplay store/display suffix(substring at the end) of currentSentence
  let currentDisplay: string = "";
  let sentenceCount: number = 0;

  onMount(() => {
    console.log("here");
    sentences = randomWords(10);
    currentSentence = sentences[0];
    currentDisplay = sentences[0];
  });
</script>

<svelte:head>
  <title>Typing Test</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div id="typing-test-page">
  <h1>Test your typing skills</h1>
  <div id="score">
    <span>sentence count: {sentenceCount}</span>
    <button id="reload" on:click={() => location.reload()}>
      <img src={reload} alt="Reload Page" />
    </button>
  </div>
  <div
    id="typing"
    on:click={() => {
      document.getElementById("editable")?.focus();
    }}
    on:keydown
  >
    <div id="typed">
      {#each typedSentences as p}
        <span class={p.class}>{p.typed}</span>
      {/each}
      <span
        contenteditable="true"
        id="editable"
        spellcheck="false"
        data-focus=""
        autocapitalize="none"
        class={currentSentence.startsWith(input) ? "" : "wrong"}
        bind:textContent={input}
        on:keydown={(e) => {
          if (
            e.key === "Enter" ||
            ((e.key === " " || e.keyCode === 32 || e.which === 32) &&
              input === "") ||
            (e.key === "Backspace" && input === "")
          ) {
            e.preventDefault();
            return;
          }

          if (e.key == " " && input !== " ") {
            e.preventDefault();
            let temp = "wrong";
            if (currentSentence == input) {
              temp = "";
              sentenceCount++;
            }
            const word = {
              typed: input,
              class: temp,
            };
            typedSentences = [...typedSentences, word];
            input = "";
            sentences = sentences.slice(1);
            currentSentence = sentences[0];
            currentDisplay = sentences[0];
            if (sentences.length <= 15) {
              sentences = [...sentences, ...randomWords(10)];
            }
            return;
          }
        }}
        on:input={() => {
          if (currentSentence.startsWith(input)) {
            currentDisplay = currentSentence.replace(input, "");
          }
        }}
      />
    </div>

    <div id="new-sentence">
      {#each sentences as pword, i}
        {#if i == 0}
          <span>{currentDisplay}</span>
        {:else}
          <span>{pword}</span>
        {/if}
      {/each}
    </div>
  </div>
</div>

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

  #typing {
    max-width: 80%;
    min-width: 80%;
    border-style: solid;
    border-radius: 10px;
    border-width: 1px;
    display: grid;
    grid-template-columns: 50% 50%;
    white-space: nowrap;
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 20px;
    border-color: var(--color-theme-1);
    background: var(--color-bg-2);
    color: var(--color-text);
    box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.25);
    line-height: 3.5;
    font-size: 1.8rem;
  }

  #typing > div {
    overflow: hidden;
  }

  #editable {
    caret-color: black;
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
