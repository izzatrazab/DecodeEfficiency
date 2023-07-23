<script lang="ts">
	import Card from '$lib/components/card.svelte'
	import Chips from '$lib/components/chips.svelte'
	
	export let data
</script>

<svelte:head>
	<title>Decode Efficiency</title>
</svelte:head>
<section>
	{#each data.posts as datum}
		<Card title={datum.title} description={datum.description} slug={datum.slug} --card-background='red' >
			<Chips arr={datum.categories}/>
		</Card>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
	}
</style>
