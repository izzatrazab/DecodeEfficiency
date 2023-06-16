<script lang="ts" context="module">
	import type { Post } from '$lib/types'
	import TypingTest from './typing-test.svelte';
	export const metadata: Omit<Post, 'slug'> = {
		title: 'LiveChat Typing Test clone',
		description: 'description2',
		date: '2024',
		categories: ['sveltekit', 'svelte', 'clone'],
		published: true
	}
</script>

<h1>{metadata.title}</h1>

<TypingTest/>
