<script lang="ts" context="module">
	import type { Post } from '$lib/types'

	export const metadata: Omit<Post, 'slug'> = {
		title: 'Test2',
		description: 'description2',
		date: '2024',
		categories: ['sveltekit', 'svelte', 'project'],
		published: true
	}
</script>

<h1>{metadata.title}</h1>
