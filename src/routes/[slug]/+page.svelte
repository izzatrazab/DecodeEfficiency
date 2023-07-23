<script lang="ts">
	import Title from '$lib/components/title.svelte'
	export let data
</script>

<svelte:head />
<Title title={data.metadata.title} datePublished={data.metadata.date} />
<svelte:component this={data.component} />
