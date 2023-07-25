<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import Chips from '$lib/components/chips.svelte'
	export let data
</script>

<svelte:head />

<div>
	{#each data.posts as datum}
		<Card title={datum.title} description={datum.description} slug={datum.slug} --card-background='red' >
			<Chips arr={datum.categories}/>
		</Card>
	{/each}
</div>


<style>
    div{
        display: flex;
    }
</style>