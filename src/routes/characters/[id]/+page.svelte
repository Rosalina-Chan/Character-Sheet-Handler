<script lang="ts">
	import { getdata } from "$lib/remote.svelte";
	import Warning from "../../Warning.svelte";
	import Widgets from "./Widgets.svelte";
	let { data } = $props();
	let character = $derived(getdata().characters[data.characterID]);

	let render = [
		{ widget: "name" },
		{
			widget: "row",
			children: [
				{ widget: "attribute", attribute: "wis" },
				{ widget: "attribute", attribute: "dex" },
				{ widget: "attribute", attribute: "str" }
			]
		}
	];
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
	{character.name}
	<Widgets widgetsToRender={render} {character} />
{/if}

<style>
	.warning-buffer {
		margin-top: 15dvh;
	}
</style>
