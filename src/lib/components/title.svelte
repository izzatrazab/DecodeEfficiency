<script lang="ts">
	export let title: string
	export let datePublished: string
</script>

<hgroup>
	<h1>{title}</h1>
	<p>Last edited: {datePublished}</p>
	<hr />
</hgroup>

<style>
	hgroup {
		text-align: center;
	}
</style>
