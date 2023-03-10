<script>
  import randomWords from "random-words";
  let post = randomWords(30);
  /**
   * @type {any[]}
   */
  let pre = [];
  let temp = "";
  let temp2 = post[0];
  let temp3 = post[0];
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
        class={temp2.includes(temp, 0) ? "" : "wrong"}
        bind:textContent={temp}
        on:input={(e) => {
          console.log(temp.length);
          if (e.data == " ") {
            if (temp.length <= 1) {
              console.log("hit space when string empty (do nothing)");
              temp = "";
              return;
            }
            temp = temp.slice(0, temp.length - 1);
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
          }

          if (temp2.includes(temp, 0)) {
            temp3 = temp2.replace(temp, "");
          }
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
    outline: none;
    border-width: 0px;
    padding: 0;
    width: auto;
    color: var(--color-theme-1);
  }
  .wrong {
    text-decoration: line-through;
  }
</style>
