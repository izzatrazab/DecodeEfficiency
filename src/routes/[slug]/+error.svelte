<script lang='ts'>
    import { page } from '$app/stores'
</script>
    <p>
        Could not find project called:
        <br>
        `{$page.error?.message}`
    </p>
<style>
    p{
        text-align: center;
        font-size: xx-large;
        font-weight: bold;
    }
</style>