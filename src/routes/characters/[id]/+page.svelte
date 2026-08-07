<script lang="ts">
	import { getdata } from "$lib/remote.svelte";
	import Warning from "../../Warning.svelte";
	import Widgets from "./Widgets.svelte";
	let { data } = $props();
	let character = $derived(getdata().characters[data.characterID]);

	let render = [
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
									colour: "normalLight",
									borderRadius: "5px",
									padding: "15px",
									children: [{ widget: "attribute", attribute: "dex" }]
								},
								{
									widget: "box",
									colour: "normalLight",
									borderRadius: "5px",
									padding: "15px",
									children: [{ widget: "attribute", attribute: "str" }]
								},
								{
									widget: "box",
									colour: "normalLight",
									borderRadius: "5px",
									padding: "15px",
									children: [{ widget: "attribute", attribute: "wis" }]
								},
								{
									widget: "box",
									colour: "normalLight",
									borderRadius: "5px",
									padding: "15px",
									children: [{ widget: "attribute", attribute: "dex" }]
								},
								{
									widget: "box",
									colour: "normalLight",
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
	];
	let testing = [
		{
			// Attributes
			widget: "boxColumn",
			colour: "normalDark",
			padding: "10px",
			borderRadius: "15px",
			align: "center",
			gap: "5px",
			children: [
				{
					// Strength
					widget: "boxColumn",
					colour: "normalLight",
					borderWidth: "2px",
					borderColour: "dark",
					borderStyle: "solid",
					borderRadius: "8px",
					width: "6em",
					align: "center",
					gap: "5px",
					children: [
						{
							widget: "box",
							borderRadius: "5px",
							padding: "5px",
							children: [
								{
									widget: "text",
									textSize: "15px",
									content: "Strength"
								}
							]
						},
						{
							widget: "box",
							colour: "normalLight",
							borderRadius: "0px",
							padding: "5px",
							children: [
								{
									widget: "attribute",
									textSize: "25px",
									attributeLocation: "attributes",
									attribute: "str"
								}
							]
						},
						{
							widget: "boxColumn",
							colour: "normalLight",
							borderRadius: "100%",
							borderColour: "dark",
							borderStyle: "solid",
							borderWidth: "2px",
							width: "3em",
							padding: "5px",
							align: "center",
							children: [
								{
									widget: "attribute",
									textSize: "15px",
									attributeLocation: "modifiers",
									attribute: "str"
								}
							]
						}
					]
				},
				{
					// Dexterity
					widget: "boxColumn",
					colour: "normalLight",
					borderWidth: "2px",
					borderColour: "dark",
					borderStyle: "solid",
					borderRadius: "8px",
					width: "6em",
					align: "center",
					gap: "5px",
					children: [
						{
							widget: "box",
							borderRadius: "5px",
							padding: "5px",
							children: [
								{
									widget: "text",
									textSize: "15px",
									content: "Dexterity"
								}
							]
						},
						{
							widget: "box",
							colour: "normalLight",
							borderRadius: "0px",
							padding: "5px",
							children: [
								{
									widget: "attribute",
									textSize: "25px",
									attributeLocation: "attributes",
									attribute: "dex"
								}
							]
						},
						{
							widget: "boxColumn",
							colour: "normalLight",
							borderRadius: "100%",
							borderColour: "dark",
							borderStyle: "solid",
							borderWidth: "2px",
							width: "3em",
							padding: "5px",
							align: "center",
							children: [
								{
									widget: "attribute",
									textSize: "15px",
									attributeLocation: "modifiers",
									attribute: "dex"
								}
							]
						}
					]
				},
				{
					// Constitution
					widget: "boxColumn",
					colour: "normalLight",
					borderWidth: "2px",
					borderColour: "dark",
					borderStyle: "solid",
					borderRadius: "8px",
					width: "6em",
					align: "center",
					gap: "5px",
					children: [
						{
							widget: "box",
							borderRadius: "5px",
							padding: "5px",
							children: [
								{
									widget: "text",
									textSize: "15px",
									content: "Constitution"
								}
							]
						},
						{
							widget: "box",
							colour: "normalLight",
							borderRadius: "0px",
							padding: "5px",
							children: [
								{
									widget: "attribute",
									textSize: "25px",
									attributeLocation: "attributes",
									attribute: "con"
								}
							]
						},
						{
							widget: "boxColumn",
							colour: "normalLight",
							borderRadius: "100%",
							borderColour: "dark",
							borderStyle: "solid",
							borderWidth: "2px",
							width: "3em",
							padding: "5px",
							align: "center",
							children: [
								{
									widget: "attribute",
									textSize: "15px",
									attributeLocation: "modifiers",
									attribute: "con"
								}
							]
						}
					]
				},
				{
					// Intelligence
					widget: "boxColumn",
					colour: "normalLight",
					borderWidth: "2px",
					borderColour: "dark",
					borderStyle: "solid",
					borderRadius: "8px",
					width: "6em",
					align: "center",
					gap: "5px",
					children: [
						{
							widget: "box",
							borderRadius: "5px",
							padding: "5px",
							children: [
								{
									widget: "text",
									textSize: "15px",
									content: "Intelligence"
								}
							]
						},
						{
							widget: "box",
							colour: "normalLight",
							borderRadius: "0px",
							padding: "5px",
							children: [
								{
									widget: "attribute",
									textSize: "25px",
									attributeLocation: "attributes",
									attribute: "int"
								}
							]
						},
						{
							widget: "boxColumn",
							colour: "normalLight",
							borderRadius: "100%",
							borderColour: "dark",
							borderStyle: "solid",
							borderWidth: "2px",
							width: "3em",
							padding: "5px",
							align: "center",
							children: [
								{
									widget: "attribute",
									textSize: "15px",
									attributeLocation: "modifiers",
									attribute: "int"
								}
							]
						}
					]
				},
				{
					// Wisdom
					widget: "boxColumn",
					colour: "normalLight",
					borderWidth: "2px",
					borderColour: "dark",
					borderStyle: "solid",
					borderRadius: "8px",
					width: "6em",
					align: "center",
					gap: "5px",
					children: [
						{
							widget: "box",
							borderRadius: "5px",
							padding: "5px",
							children: [
								{
									widget: "text",
									textSize: "15px",
									content: "Wisdom"
								}
							]
						},
						{
							widget: "box",
							colour: "normalLight",
							borderRadius: "0px",
							padding: "5px",
							children: [
								{
									widget: "attribute",
									textSize: "25px",
									attributeLocation: "attributes",
									attribute: "wis"
								}
							]
						},
						{
							widget: "boxColumn",
							colour: "normalLight",
							borderRadius: "100%",
							borderColour: "dark",
							borderStyle: "solid",
							borderWidth: "2px",
							width: "3em",
							padding: "5px",
							align: "center",
							children: [
								{
									widget: "attribute",
									textSize: "15px",
									attributeLocation: "modifiers",
									attribute: "wis"
								}
							]
						}
					]
				},
				{
					// Charisma
					widget: "boxColumn",
					colour: "normalLight",
					borderWidth: "2px",
					borderColour: "dark",
					borderStyle: "solid",
					borderRadius: "8px",
					width: "6em",
					align: "center",
					gap: "5px",
					children: [
						{
							widget: "box",
							borderRadius: "5px",
							padding: "5px",
							children: [
								{
									widget: "text",
									textSize: "15px",
									content: "Charisma"
								}
							]
						},
						{
							widget: "box",
							colour: "normalLight",
							borderRadius: "0px",
							padding: "5px",
							children: [
								{
									widget: "attribute",
									textSize: "25px",
									attributeLocation: "attributes",
									attribute: "cha"
								}
							]
						},
						{
							widget: "boxColumn",
							colour: "normalLight",
							borderRadius: "100%",
							borderColour: "dark",
							borderStyle: "solid",
							borderWidth: "2px",
							width: "3em",
							padding: "5px",
							align: "center",
							children: [
								{
									widget: "attribute",
									textSize: "15px",
									attributeLocation: "modifiers",
									attribute: "cha"
								}
							]
						}
					]
				} // End of Attributes
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
	<Widgets widgetsToRender={testing} {character} />
{/if}

<style>
	.warning-buffer {
		margin-top: 15dvh;
	}
</style>
