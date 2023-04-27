<script lang="ts">
	import svelteLogo from '$lib/logo/svelte.svg';
	import picoLogo from '$lib/logo/pico.svg';
	import { moreExperienceTools, lessExperienceTools } from '$lib/db';
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>
<header />
<section>
	<h3>Skills</h3>
	<section class="flex">
		{#each moreExperienceTools.tools as tool}
		<article>
			<img src={tool.logo} alt="" />
			<p>{tool.description}</p>
		</article>
		{/each}
	</section>
</section>
<section>
	<h3>Technologies I have used before</h3>
	<section class="flex">
		{#each lessExperienceTools.tools as tool}
			<article>
				<img src={tool.logo} alt="" />
				<p>{tool.description}</p>
			</article>
		{/each}
	</section>
</section>

<style>
	header {
		text-align: center;
	}
	.flex{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	article {
		width: 500px;
		margin: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: justify;
	}
	article > img {
		margin-right: 20px;
		aspect-ratio: 1;
		min-width: 100px;
	}

	article > p{
		margin: 0;
	}
</style>
