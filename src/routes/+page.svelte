<script>
	import Card from '$lib/components/card.svelte';
	import Chips from '$lib/components/chips.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Decode Efficiency</title>
	<meta name="google-adsense-account" content="ca-pub-3723871799636182">
</svelte:head>
<section>
	{#each data.posts as datum}
		<Card
			title={datum.title}
			description={datum.description}
			slug={datum.slug}
			--card-background="red"
		>
			{#snippet thumbnail()}
						<img
					
					src={datum.thumbnail}
					alt=""
					style="border-radius: inherit;"
				/>
					{/snippet}
			{#snippet chip()}
						<Chips arr={datum.categories}  />
					{/snippet}
		</Card>
	{/each}
	<div>
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3723871799636182"
     crossorigin="anonymous"></script>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
	}
</style>
