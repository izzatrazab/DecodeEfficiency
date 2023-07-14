<script lang="ts">
	import type { Post } from '$lib/types.js'
	export let data
</script>

<svelte:head />
<svelte:component this={data.component} />