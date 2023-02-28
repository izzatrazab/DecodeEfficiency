<script lang="ts">
  import { page } from "$app/stores";
  import hamburger from "$lib/images/hamburger.svg";
  import github from "$lib/images/github.svg";
  import "./styles.css";
  import navList from "./navList";

  let isSidebarOpen: boolean = false;
</script>

<div class="app">
  <aside class:SidebarOpen={isSidebarOpen}>
    <div class="corner">
      <button
        id="hamburger"
        on:click={() => {
          isSidebarOpen = !isSidebarOpen;
        }}
      >
        <img src={hamburger} alt="Sidebar Hamburger" />
      </button>
    </div>
    <nav>
      <ul class="sidenavul">
        {#each navList as nav}
          <li
            aria-current={$page.url.pathname === "/" + nav.route
              ? "page"
              : undefined}
          >
            <a href="/{nav.route}">{nav.name}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </aside>
  <div
    id="overlay"
    style="visibility: {isSidebarOpen ? 'visible' : 'hidden'};"
    on:click={() => {
      isSidebarOpen = !isSidebarOpen;
    }}
    on:keyup
  />
  <div>
    <header>
      <div class="corner">
        <button
          id="hamburger"
          on:click={() => {
            isSidebarOpen = !isSidebarOpen;
          }}
        >
          <img src={hamburger} alt="Sidebar Hamburger" />
        </button>
      </div>

      <nav>
        <svg viewBox="0 0 2 3" aria-hidden="true">
          <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
        </svg>
        <ul>
          <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
            <a href="/">Home</a>
          </li>
          <li
            aria-current={$page.url.pathname === "/about" ? "page" : undefined}
          >
            <a href="/about">About</a>
          </li>
        </ul>
        <svg viewBox="0 0 2 3" aria-hidden="true">
          <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
        </svg>
      </nav>

      <div class="corner">
        <a href="https://github.com/sveltejs/kit">
          <img src={github} alt="GitHub" />
        </a>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <p>
        visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
      </p>
    </footer>
  </div>
</div>

<style>
  .app {
    min-height: 100vh;
  }

  .app > div {
    display: grid;
    grid-template-areas:
      "header header"
      "main main"
      "footer footer";
    grid-template-rows: auto 1fr auto;
  }

  header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
  }

  #hamburger {
    background: rgba(0, 0, 0, 0);
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  aside {
    position: absolute;
    left: -100%;
    height: 100%;
    width: 300px;
    transition: left 0.1s ease-in-out;
    grid-area: aside;
    z-index: 2;
    background-color: var(--color-bg-1);
    background-image: radial-gradient(
        50% 50% at 50% 50%,
        rgba(255, 255, 255, 0.75) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      linear-gradient(
        180deg,
        var(--color-bg-0) 0%,
        var(--color-bg-1) 15%,
        var(--color-bg-2) 50%
      );
  }

  main {
    grid-area: main;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .SidebarOpen {
    left: 0;
  }

  #overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
    visibility: hidden;
  }
  footer {
    grid-area: footer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }

  .corner {
    width: 3em;
    height: 3em;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  .sidenavul {
    background-color: rgba(0, 0, 0, 0);
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li[aria-current="page"]::before {
    --size: 6px;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--color-theme-1);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
</style>
