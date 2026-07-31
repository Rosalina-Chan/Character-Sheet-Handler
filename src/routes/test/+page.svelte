<script lang="ts">
	import Cat from "./Cat.svelte";

	let count = $state(0);
	function increment() {
		count++;
	}
</script>

<Cat {count} />

<p>
	{count}
</p>

<button onclick={increment}> Increment </button>
