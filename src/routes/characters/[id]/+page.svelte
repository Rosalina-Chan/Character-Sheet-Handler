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
		errorTitle="Invalid Character ID"
		errorMessage="You've typed an invalid Character ID in, please double check the link you were sent!"
		errorLink="/characters"
		errorLinkText="Return"
		severeness="0"
	/>
{:else}
	{character.name}
{/if}
