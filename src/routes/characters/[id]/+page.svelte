<script lang="ts">
	import { getdata } from "$lib/remote.svelte";
	import Warning from "../../Warning.svelte";
	let { data } = $props();
	let character = $derived(getdata().characters[data.characterID]);
</script>

<h1>Welcome to Your Characters!</h1>

<h2>Favourited Characters</h2>

{#if character === undefined}
	<Warning
		errorTitle="Nothing to see here"
		errorMessage="Really, nothing here bub"
		errorLink="/characters"
	/>
{:else}
	{character.name}
{/if}
