<script lang="ts">
    import {categories} from '$lib/types'
</script>

<svelte:head>
	<title>Category</title>
</svelte:head>
{#each categories as category}
<p>
    <a href={'category/'+category}>{category}</a>
</p>
{/each}
<p>display lis of category available</p>