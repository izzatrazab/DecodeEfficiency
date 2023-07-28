<script lang="ts" context="module">
	import Title from '$lib/components/title.svelte'
	import type { Post } from '$lib/types'
	import TypingTest from './typing-test.svelte'
	
	export const metadata: Omit<Post, 'slug'> = {
		title: 'LiveChat Typing Test clone',
		description: 'LiveChat Typing Test app.',
		date: '2024',
		categories: ['sveltekit', 'svelte', 'clone', 'css'],
		published: true
	}
</script>

<svelte:head>
	<title>LiveChat Typing Test clone</title>
	<meta name="description" content="LiveChat Typing Test clone" />
	<meta
		name="keywords"
		content="typing test, learn by cloning app, countdown, randomWords pakcage"
	/>
</svelte:head>
<TypingTest />