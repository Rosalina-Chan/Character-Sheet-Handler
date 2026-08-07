<script lang="ts">
	import "greset/greset.css";
	import "$lib/style.css";
	import Widgets from "./Widgets.svelte";
	import type { CharacterData } from "$lib/remote.svelte";
	let { widgetsToRender, character }: { character: CharacterData; widgetsToRender: any } = $props();
</script>

{#each widgetsToRender as widget}
	{#if widget.widget === "name"}
		<p>{character.name}</p>
	{:else if widget.widget === "text"}
		<p style="font-size: {widget.textSize};">{widget.content}</p>
	{:else if widget.widget === "attribute"}
		<div style="font-size: {widget.textSize};">
			{character[widget.attributeLocation as "attributes" | "modifiers"][widget.attribute]}
		</div>
	{:else if widget.widget === "row"}
		<div
			style="display: flex; padding: {widget.padding}; gap: {widget.gap}; justify-content: {widget.justify};"
		>
			<Widgets widgetsToRender={widget.children} {character} />
		</div>
	{:else if widget.widget === "column"}
		<div
			style="display: flex; flex-direction: column; gap: {widget.gap}; justify-content: {widget.justify}; align-items: {widget.align}"
		>
			<Widgets widgetsToRender={widget.children} {character} />
		</div>
	{:else if widget.widget === "box"}
		<div
			style="border-radius: {widget.borderRadius}; border-style: {widget.borderStyle}; border-width: {widget.borderWidth}; padding: {widget.padding}; margin: {widget.margin}; width: {widget.width}; height: {widget.height};"
			class:normal={widget.colour === "normal"}
			class:normal-light={widget.colour === "normalLight"}
			class:normal-dark={widget.colour === "normalDark"}
			class:normal-icon={widget.colour === "normalIcon"}
			//
			class:parchment={widget.colour === "parchment"}
			class:parchment-light={widget.colour === "parchmentLight"}
			class:parchment-dark={widget.colour === "parchmentDark"}
			class:parchment-icon={widget.colour === "parchmentIcon"}
			//
			class:dark={widget.colour === "dark"}
			class:dark-light={widget.colour === "darkLight"}
			class:dark-dark={widget.colour === "darkDark"}
			class:dark-icon={widget.colour === "darkIcon"}
			//
			class:border-colour={widget.borderColour === "normal"}
			class:border-colour-parchment={widget.borderColour === "parchment"}
			class:border-colour-dark={widget.borderColour === "dark"}
		>
			<Widgets widgetsToRender={widget.children} {character} />
		</div>
	{:else if widget.widget === "boxColumn"}
		<div
			style="border-radius: {widget.borderRadius}; border-style: {widget.borderStyle}; border-width: {widget.borderWidth}; padding: {widget.padding}; margin: {widget.margin}; width: {widget.width}; height: {widget.height};"
			class:normal={widget.colour === "normal"}
			class:normal-light={widget.colour === "normalLight"}
			class:normal-dark={widget.colour === "normalDark"}
			class:normal-icon={widget.colour === "normalIcon"}
			//
			class:parchment={widget.colour === "parchment"}
			class:parchment-light={widget.colour === "parchmentLight"}
			class:parchment-dark={widget.colour === "parchmentDark"}
			class:parchment-icon={widget.colour === "parchmentIcon"}
			//
			class:dark={widget.colour === "dark"}
			class:dark-light={widget.colour === "darkLight"}
			class:dark-dark={widget.colour === "darkDark"}
			class:dark-icon={widget.colour === "darkIcon"}
			//
			class:border-colour={widget.borderColour === "normal"}
			class:border-colour-parchment={widget.borderColour === "parchment"}
			class:border-colour-dark={widget.borderColour === "dark"}
		>
			<div
				style="display: flex; flex-direction: column; gap: {widget.gap}; justify-content: {widget.justify}; align-items: {widget.align}"
			>
				<Widgets widgetsToRender={widget.children} {character} />
			</div>
		</div>
	{/if}
{/each}

<style>
	.normal {
		background-color: var(--normal-background-colour);
		width: fit-content;
	}
	.normal-light {
		background-color: var(--normal-light-background-colour);
		width: fit-content;
	}
	.normal-dark {
		background-color: var(--normal-dark-background-colour);
		width: fit-content;
	}
	.normal-icon {
		background-color: var(--normal-background-icon);
		width: fit-content;
	}

	.parchment {
		background-color: var(--parchment-background-colour);
		width: fit-content;
	}
	.parchment-light {
		background-color: var(--parchment-light-background-colour);
		width: fit-content;
	}
	.parchment-dark {
		background-color: var(--parchment-dark-background-colour);
		width: fit-content;
	}
	.parchment-icon {
		background-color: var(--parchment-background-icon);
		width: fit-content;
	}

	.dark {
		background-color: var(--dark-background-colour);
		width: fit-content;
		color: var(--dark-text-colour);
	}
	.dark-light {
		background-color: var(--dark-light-background-colour);
		width: fit-content;
		color: var(--dark-text-colour);
	}
	.dark-dark {
		background-color: var(--dark-dark-background-colour);
		width: fit-content;
		color: var(--dark-text-colour);
	}
	.dark-icon {
		background-color: var(--dark-background-icon);
		width: fit-content;
		color: var(--dark-text-colour);
	}

	.border-colour {
		width: fit-content;
		border-color: var(--normal-dark-background-colour);
	}
	.border-colour-parchment {
		width: fit-content;
		border-color: var(--parchment-dark-background-colour);
	}
	.border-colour-dark {
		width: fit-content;
		border-color: var(--dark-dark-background-colour);
	}
</style>
