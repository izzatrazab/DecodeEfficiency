<script lang="ts">
	export let title: string = ''
	export let description: string = ''
	export let slug: string = ''
</script>

<a href="/{slug}">
	<article>
		<hgroup>
			<h3>
				{title}
			</h3>
			<p>
				{description}
			</p>
		</hgroup>
	</article>
</a>

<style>
	a {
		display: contents;
	}
	article {
		aspect-ratio: 0.8;
		transition: all .2s !important;
		width: 280px;
	}

	hgroup > h3{
		overflow: hidden;
	}
	hgroup > p{
		height: 3em;
	}
	article:hover {
		transform: scale(1.04);
		border-style: solid;
		border-color: var(--dropdown-border);
	}
</style>
