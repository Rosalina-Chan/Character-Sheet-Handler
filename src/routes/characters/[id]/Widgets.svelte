<script lang="ts">
	import "greset/greset.css";
	import "$lib/style.css";
	import Widgets from "./Widgets.svelte";
	import type { CharacterData } from "$lib/remote.svelte";
	let { widgetsToRender, character }: { character: CharacterData; widgetsToRender: any } = $props();
</script>

{#each widgetsToRender as widget}
	{#if widget.widget === "name"}
		<h1>{character.name}</h1>
	{:else if widget.widget === "attribute"}
		<div>
			<div>{widget.attribute}</div>
			<div>{character.attributes[widget.attribute]}</div>
			<div>{character.modifiers[widget.attribute]}</div>
		</div>
	{:else if widget.widget === "row"}
		<div style="display: flex; gap: 15px;">
			<Widgets widgetsToRender={widget.children} {character} />
		</div>
	{/if}
{/each}
