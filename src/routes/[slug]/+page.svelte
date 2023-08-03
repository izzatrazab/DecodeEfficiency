<script lang="ts">
	import Title from '$lib/components/title.svelte'
	import type { Post } from '$lib/types'
	export let data:{component:any,metadata:Post}
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	{#each data.metadata.meta as meta}
		<meta name={meta.name} content={meta.content}>
	{/each}
</svelte:head>

<Title title={data.metadata.title} datePublished={data.metadata.date} />

<svelte:component this={data.component} />
