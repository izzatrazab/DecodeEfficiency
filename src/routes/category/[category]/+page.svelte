<script lang="ts">
	import Card from '$lib/components/card.svelte';
	export let data
</script>

<svelte:head />

<div>
	{#each  data.posts as post }
	<Card title={post.title} description={post.description} slug={post.slug}/>
	{/each}
</div>


<style>
    div{
        display: flex;
    }
</style>