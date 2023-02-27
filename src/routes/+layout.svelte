<script>
  import Header from "./Header.svelte";
  import "./styles.css";
</script>

<div class="app">
  <Header />
  <aside id="sidebar">
    <nav>
      <ul>
        <li>
          <a href="/about">HOkme</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li>
      </ul>
    </nav>
  </aside>
  <main id="content">
    <slot />
  </main>

  <footer>
    <p>
      visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
    </p>
  </footer>
</div>

<style>
  .app {
    min-height: 100vh;
    display: grid;
    grid-template-areas:
      "header header header"
      "sidebar main main"
      "sidebar footer footer";
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
</style>
