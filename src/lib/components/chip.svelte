<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [text]
	 */

	/** @type {Props} */
	let { text = '' } = $props();
</script>

<!-- <span class="chip">{text}</span> -->
<mark class="secondary">{text}</mark>