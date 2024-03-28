<script>
	import Title from '$lib/components/title.svelte';
	// import type { Post } from '$lib/types'
	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	{#each data.metadata.meta as meta}
		<meta name={meta.name} content={meta.content} />
	{/each}
</svelte:head>

<Title title={data.metadata.title} datePublished={data.metadata.date} />

<div style="padding-top: 2rem; padding-bottom: 2rem;">
	<svelte:component this={data.app} />
</div>

<section class="container">
	<svelte:component this={data.md} />
</section>

<style>
	section {
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
