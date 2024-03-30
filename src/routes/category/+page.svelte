<script>
    import {categories} from '$lib/types'
</script>

<svelte:head>
	<title>Category</title>
</svelte:head>
<main>
{#each categories as category}
        <a href={'category/'+category} role="button" class="outline">{category}</a>
    {/each}
</main>

<style>
main {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

/* a{
    color: var(--primary-inverse);
    font-weight: bold;
    text-transform: uppercase;
    padding: .75rem;
    border-radius: 10px;
    background-color: var(--primary);
} */
</style>