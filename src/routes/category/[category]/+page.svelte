<script lang="ts">
	import Card from '$lib/components/card.svelte'
	import Chips from '$lib/components/chips.svelte'
	import {page} from '$app/stores'
	export let data
	
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
			<Chips arr={datum.categories} />
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
