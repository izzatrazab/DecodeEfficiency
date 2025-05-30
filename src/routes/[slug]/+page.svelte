<script>
	import Title from '$lib/components/title.svelte';
	import { setContext } from 'svelte';
	
	/**
	 * @typedef {Object} Props
	 * @property {any} data - import type { Post } from '$lib/types'
	 */

	/** @type {Props} */
	let { data } = $props();
	let reload = $state({});

	setContext('reload', { reloadComponent })

	function reloadComponent(){
		reload = {}
	}
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	{#each data.metadata.meta as meta}
		<meta name={meta.name} content={meta.content} />
	{/each}
</svelte:head>

<Title title={data.metadata.title} datePublished={data.metadata.date} />

<div style="padding-top: 2rem; padding-bottom: 2rem;">
	{#key reload}
		<data.app />
	{/key}
</div>

<section class="container">
	<data.md />
</section>

<style>
	section {
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
