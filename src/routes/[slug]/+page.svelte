<script lang="ts">
	import Title from '$lib/components/title.svelte'
	import type { Post } from '$lib/types'
	export let data:{app:any,md:any,metadata:Post}
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	{#each data.metadata.meta as meta}
		<meta name={meta.name} content={meta.content}>
	{/each}
</svelte:head>

<Title title={data.metadata.title} datePublished={data.metadata.date} />

<svelte:component this={data.app} />
<section>
	<svelte:component this={data.md}/>
</section>

<style>
	section{
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}
</style>