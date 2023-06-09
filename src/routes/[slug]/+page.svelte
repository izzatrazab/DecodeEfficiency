<script lang="ts">
	export let data
</script>

<svelte:head />
<article>
	<h1>
		{JSON.stringify(data.metadata)}
	</h1>
	<svelte:component this={data.component} />
</article>
