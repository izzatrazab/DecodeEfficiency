<script lang="ts">
	import type { Post } from '$lib/types.js'
	export let data
	let metadata: Post = data.metadata
</script>

<svelte:head />
<article>
	<svelte:component this={data.component} />
</article>
