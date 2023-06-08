<script lang="ts">
    import type { Categories } from '$lib/types'
    import {categories} from '$lib/types'
	export let data
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