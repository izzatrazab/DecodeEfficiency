<script lang="ts">
	import Card from '$lib/components/card.svelte'
	export let data
</script>

<svelte:head>
	<title>Decode Efficiency</title>
</svelte:head>
<section>
	{#each data.posts as datum}
		<Card title={datum.slug} description={datum.description} slug={datum.slug} />
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
