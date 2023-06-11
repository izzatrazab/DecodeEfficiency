<script lang="ts" context="module">
	import type { Post } from '$lib/types'

	export const metadata: Omit<Post, 'slug'> = {
		title: 'Test',
		description: 'description',
		date: '2023',
		categories: ['svelte'],
		published: true
	}
</script>

<h1>{metadata.title}</h1>
