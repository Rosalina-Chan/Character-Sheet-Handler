<script lang="ts">
	import { getdata } from "$lib/remote.svelte";
	import Warning from "../../Warning.svelte";
	import Widgets from "./Widgets.svelte";
	let { data } = $props();
	let character = $derived(getdata().characters[data.characterID]);

	let render = [
		{ widget: "name" },
		{
			widget: "box",
			children: [
				{
					widget: "row",
					gap: "50px",
					padding: "45px",
					justify: "center",
					children: [
						{
							widget: "box",
							colour: "normal",
							borderRadius: "10px",
							children: [
								{
									widget: "column",
									gap: "10px",
									padding: "45px",
									children: [
										{
											widget: "box",
											colour: "normalLight",
											borderRadius: "5px",
											padding: "15px",
											children: [{ widget: "attribute", attribute: "wis" }]
										},
										{
											widget: "box",
											colour: "normalDark",
											borderRadius: "5px",
											padding: "15px",
											children: [{ widget: "attribute", attribute: "dex" }]
										},
										{
											widget: "box",
											colour: "normalIcon",
											borderRadius: "5px",
											padding: "15px",
											children: [{ widget: "attribute", attribute: "str" }]
										}
									]
								}
							]
						},
						{
							widget: "box",
							colour: "parchment",
							borderRadius: "10px",
							children: [
								{
									widget: "column",
									gap: "10px",
									padding: "45px",
									children: [
										{
											widget: "box",
											colour: "parchmentLight",
											borderRadius: "5px",
											padding: "15px",
											children: [{ widget: "attribute", attribute: "wis" }]
										},
										{
											widget: "box",
											colour: "parchmentDark",
											borderRadius: "5px",
											padding: "15px",
											children: [{ widget: "attribute", attribute: "dex" }]
										},
										{
											widget: "box",
											colour: "parchmentIcon",
											borderRadius: "5px",
											padding: "15px",
											children: [{ widget: "attribute", attribute: "str" }]
										}
									]
								}
							]
						},
						{
							widget: "box",
							colour: "dark",
							borderRadius: "10px",
							children: [
								{
									widget: "column",
									gap: "10px",
									padding: "45px",
									children: [
										{
											widget: "box",
											colour: "darkLight",
											borderRadius: "5px",
											padding: "15px",
											children: [{ widget: "attribute", attribute: "wis" }]
										},
										{
											widget: "box",
											colour: "darkDark",
											borderRadius: "5px",
											padding: "15px",
											children: [{ widget: "attribute", attribute: "dex" }]
										},
										{
											widget: "box",
											colour: "darkIcon",
											borderRadius: "5px",
											padding: "15px",
											children: [{ widget: "attribute", attribute: "str" }]
										}
									]
								}
							]
						}
					]
				}
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
	<Widgets widgetsToRender={render} {character} />
{/if}

<style>
	.warning-buffer {
		margin-top: 15dvh;
	}
</style>
