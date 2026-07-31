<script lang="ts">
	let { count } = $props();
</script>

<p>
	{#each new Array(count) as _}
		:3
	{/each}
</p>

<style>
	p {
		background-color: hotpink;
	}
</style>
