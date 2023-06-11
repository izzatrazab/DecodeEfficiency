<script lang="ts">
	export let title: string = ''
	export let description: string = ''
    export let slug: string =''
</script>

<a href="/{slug}">
	<section>
		<p>
			{title}
		</p>
		<p>
			{description}
		</p>
	</section>
</a>

<style>
	section {
		aspect-ratio: 1;
		background-color: red;
		width: 100px;
		margin: 10px;
	}
</style>
