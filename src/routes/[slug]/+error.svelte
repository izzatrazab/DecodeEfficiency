<script>
    import { page } from '$app/state'
</script>
    <p>
        Could not find project called:
        <br>
        `{page.error?.message}`
    </p>
<style>
    p{
        text-align: center;
        font-size: xx-large;
        font-weight: bold;
    }
</style>