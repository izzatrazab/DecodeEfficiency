<script lang="ts">
	import { page } from '$app/state'
</script>

<div>
	<h1>{page.error?.message}</h1>
</div>