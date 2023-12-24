<script>
	import Chip from './chip.svelte'
	export let arr  = []
</script>

<div>
	{#each arr as text}
		<Chip {text} />
	{/each}
</div>

<style>
	div {
		padding-block: 5px;
		display: flex;
		gap: 5px;
		flex-wrap: wrap;
	}
</style>
