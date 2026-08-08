<script lang="ts">
	import { getdata } from "$lib/remote.svelte";
	import { sheet } from "./characterSheet.js";
	import Warning from "../../Warning.svelte";
	import Widgets from "./Widgets.svelte";
	let { data } = $props();
	let character = $derived(getdata().characters[data.characterID]);
	let testing = sheet;
</script>

{#if character === undefined}
	<div class="warning-buffer"></div>
	<Warning
		errorTitle="Invalid Character ID"
		errorMessage="You've typed an invalid Character ID in, please double check the link you were sent!"
		errorLink="/characters"
		errorLinkText="Return"
		severeness="0"
	/>
{:else}
	<Widgets widgetsToRender={testing} context={{ character }} />
{/if}

<style>
	.warning-buffer {
		margin-top: 15dvh;
	}
</style>
