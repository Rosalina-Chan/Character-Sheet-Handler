<script lang="ts">
	import "greset/greset.css";
	import "$lib/style.css";
	import Widgets from "./Widgets.svelte";
	import type { CharacterData } from "$lib/remote.svelte";
	let { widgetsToRender, context }: { context: any; widgetsToRender: any } = $props();
</script>

{#each widgetsToRender as widget}
	{#if widget.widget === "text"}
		<p style="font-size: {widget.textSize}px;">{widget.content}</p>
	{:else if widget.widget === "value"}
		<div style="font-size: {widget.textSize}px;">
			{widget.path.reduce((acc: any, key: string) => acc[key], context)}
		</div>
	{:else if widget.widget === "loop"}
		{#each widget.path.reduce((acc: any, key: string) => acc[key], context) as iteration}
			<Widgets
				widgetsToRender={widget.children}
				context={{ ...context, [widget.variable]: iteration }}
			/>
		{/each}
	{:else if widget.widget === "box"}
		<div
			style="

			/*Border and Box Handling*/

			border-radius: {widget.borderRadius}px;
			border-style: {widget.borderStyle}; 
			border-width: {widget.borderWidth}px; 

			border-left-width: {widget.borderLeftWidth}px;
			border-right-width: {widget.borderRightWidth}px;
			border-top-width: {widget.borderTopWidth}px;
			border-bottom-width: {widget.borderBottomWidth}px;

			padding: {widget.padding}px; 
			padding-left: {widget.paddingLeft}px; 
			padding-right: {widget.paddingRight}px; 
			padding-top: {widget.paddingTop}px; 
			padding-bottom: {widget.paddingBottom}px; 

			margin: {widget.margin}px; 
			margin-left: {widget.marginLeft}px; 
			margin-right: {widget.marginRight}px; 
			margin-top: {widget.marginTop}px; 
			margin-bottom: {widget.marginBottom}px; 

			width: {widget.width}px; 
			height: {widget.height}px;

			/*Column and Row Handling*/ 

			display: flex; 
			flex-direction: {widget.flexDirection}; 
			gap: {widget.gap}px; 
			justify-content: {widget.justify}; 
			align-items: {widget.align}"
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
			<Widgets widgetsToRender={widget.children} {context} />
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
