<script>
	import Card from '$lib/components/card.svelte'
	import Chips from '$lib/components/chips.svelte'
	import {page} from '$app/stores'
	let { data } = $props();
	
</script>

<svelte:head />
	<h1>Category: {$page.params.category}</h1>
<section>
	{#each data.posts as datum}
		<Card
			title={datum.title}
			description={datum.description}
			slug={datum.slug}
			--card-background="red"
		> 
			{#snippet thumbnail()}
						<img  src="{datum.thumbnail}" alt="" style="border-radius: inherit;">
					{/snippet} 
			{#snippet chip()}
						<Chips arr={datum.categories} />
					{/snippet}
		</Card>
	{/each}
	{#if data.posts.length === 0}
	<p>Sorry, there is no project yet in this category</p>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
	}
</style>
