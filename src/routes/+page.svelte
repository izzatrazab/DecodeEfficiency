<script>
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="card">
    <p>a card</p>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  .card {
    padding: 10px;
    background-color: rgb(255, 62, 0);
    border-radius: 10px;
    aspect-ratio: 16/9;
  }
</style>
