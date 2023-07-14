<script lang="ts" context="module">
	import Title from '$lib/components/title.svelte'
	import type { Post } from '$lib/types'
	import TypingTest from './typing-test.svelte'
	export const metadata: Omit<Post, 'slug'> = {
		title: 'LiveChat Typing Test clone',
		description: 'description2',
		date: '2024',
		categories: ['sveltekit', 'svelte', 'clone'],
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
<Title title={metadata.title} datePublished={metadata.date} />
<TypingTest />
<article>
	<ol>
		<li>
			<section>
				<hgroup>
					<h2>Setup</h2>
					<p>Include scaffold and package needed.</p>
				</hgroup>
				<ol>
					<li>
						scaffold
						<p>npm create bla bla bla</p>
					</li>
					<li>package</li>
				</ol>
			</section>
		</li>
		<li>
			<section>
				<h2>Design</h2>
				<p>random-words</p>
			</section>
		</li>
	</ol>
</article>