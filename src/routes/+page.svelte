<script lang="ts">
	export let data
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<ol>
	{#each data.posts as datum}
		<li>
			<a href="/{datum.slug}">{datum.title}</a>
		</li>
	{/each}
</ol>
