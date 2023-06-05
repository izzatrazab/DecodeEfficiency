<script lang="ts">
    export let data
</script>

<svelte:head>
</svelte:head>
<article>
    <svelte:component this={data.content}/>
{data.category}
</article>
