<script lang='ts'>
    export let text:string = ''
</script>
<span class="chip">{text}</span>
<style>
    span{
        padding-inline: 10px;
		padding-bottom: 1px;
		border-radius: 20px;
		background-color: var(--dropdown-background-color);
		color: var(--dropdown-color);
		border-color: var(--dropdown-border-color);
		box-shadow: var(--dropdown-box-shadow);
    }
</style>