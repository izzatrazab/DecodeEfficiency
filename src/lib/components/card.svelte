<script lang="ts">
	export let title: string = ''
	export let description: string = ''
	export let slug: string = ''
</script>

<a href="/{slug}">
	<div class='card'>
		<hgroup>
			<h3>
				{title}
			</h3>
			<p>
				{description}
			</p>
		</hgroup>
		<slot/>
	</div>
</a>

<style>
	a {
		text-decoration: none;
		color: white;
	}
	div {
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
	a:focus div,
	div:hover{
		text-decoration: none;
		transform: scale(1.04);
		border-style: solid;
		border-color: var(--dropdown-border);
	}
</style>
