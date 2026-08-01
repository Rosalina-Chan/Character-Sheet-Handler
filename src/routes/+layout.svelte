<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import "greset/greset.css";
	import "$lib/style.css";
	import Navbar from "./Navbar.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<div class="main-content">
	{@render children()}
</div>

<style>
	.main-content {
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
