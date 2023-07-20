<script lang="ts">
	import Chip from './chip.svelte'
	export let arr: string[] = []
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
