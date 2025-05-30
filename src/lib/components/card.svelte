<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [title]
	 * @property {string} [description]
	 * @property {string} [slug]
	 * @property {import('svelte').Snippet} [thumbnail]
	 * @property {import('svelte').Snippet} [chip]
	 */

	/** @type {Props} */
	let {
		title = '',
		description = '',
		slug = '',
		thumbnail,
		chip
	} = $props();
</script>

<a href="/{slug}">
	<article class='card'>
		<div id="thumbnail" >
			{@render thumbnail?.()}
		</div>
		<hgroup>
			<h5>
				{title}
			</h5>
			<p>
				{description}
			</p>
		</hgroup>
		{@render chip?.()}
	</article>
</a>

<style>
	a {
		text-decoration: none;
		color: white;
	}
	article {
		aspect-ratio: 1;
		transition: all .2s !important;
		width: 280px;
		margin: 0;
	}

	hgroup > h5{
		overflow: hidden;
	}
	hgroup > p{
		height: 3em;
	}
	a:focus article,
	article:hover{
		text-decoration: none;
		transform: scale(1.04);
		border-style: solid;
		/* border-color: var(--pico-dropdown-border); */
	}

	#thumbnail{
		aspect-ratio: 16/9;
		margin: -1rem -1rem 1rem -1rem;
		border-radius: inherit;
	}
</style>
