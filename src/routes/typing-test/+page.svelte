<script>
  import randomWords from "random-words";
  import { onMount } from "svelte";

  /**
   * @type {any[]}
   */
  let post = [];
  /**
   * @type {any[]}
   */
  let pre = [];
  let temp = "";
  let temp2 = "";
  let temp3 = "";
  let keydown = "";
  let oninput = "";
  onMount(async () => {
    post = randomWords(30);
    temp2 = post[0];
    temp3 = post[0];
  });
</script>

<svelte:head>
  <title>Typing Test</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div id="typing-test-page">
  <h1>Test your typing skills</h1>
  <div id="score">
    <div>time</div>
    <div>wpm</div>
    <div>cpm</div>
    <div>temp: {temp}</div>
    <div>temp2: {temp2}</div>
    <div>temp3: {temp3}</div>
    <div>keydown: {keydown}</div>
    <div>oninput: {oninput}</div>
  </div>
  <div
    id="typing"
    on:click={() => {
      document.getElementById("editable")?.focus();
    }}
    on:keydown
  >
    <div id="typed">
      {#each pre as p}
        <span class={p.class}>{p.typed}</span>
      {/each}
      <span
        contenteditable="true"
        id="editable"
        spellcheck="false"
        data-focus=""
        autocapitalize="none"
        class={temp2.includes(temp, 0) ? "" : "wrong"}
        bind:textContent={temp}
        on:keydown={(e) => {
          keydown = e.key;
          if (
            e.key === "Enter" ||
            (e.key === " " && temp === "") ||
            (e.key === "Backspace" && temp === "")
          ) {
            e.preventDefault();
            return;
          }

          if (e.key == " ") {
            e.preventDefault();
            const word = {
              typed: temp,
              class: temp2 == temp ? "" : "wrong",
            };
            pre = [...pre, word];
            temp = "";
            post = post.slice(1);
            temp2 = post[0];
            temp3 = post[0];
            if (post.length <= 15) {
              post = [...post, ...randomWords(30)];
            }
            return;
          }

          if (e.key === "Backspace" && temp2.includes(temp, 0)) {
            temp3 = temp2.replace(temp.substring(0, temp.length - 1), "");
            return;
          }

          if (temp2.includes(e.key, 0)) {
            temp3 = temp2.replace(temp + e.key, "");
          }
        }}
        on:input={(e) => {
          oninput = e.data;
        }}
      />
    </div>

    <div id="new-sentence">
      {#each post as pword, i}
        {#if i != 0}
          <span>{pword}</span>
        {:else}
          <span>{temp3}</span>
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

  #typing {
    max-width: 80%;
    min-width: 80%;
    border-style: solid;
    border-radius: 10px;
    border-width: 1px;
    display: grid;
    grid-template-columns: 50% 50%;
    white-space: nowrap;
    padding: 20px;
    margin-top: 20px;
    border-color: var(--color-theme-1);
    background: var(--color-bg-2);
    box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.25);
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
</style>
