<script lang="ts">
	import type { Post } from '$lib/types.js'

	export let data
	const post: Post = data.post
</script>

<svelte:head />
<article>
	<h1>
		{post.title}
	</h1>
	<svelte:component this={data.content} />
</article>
