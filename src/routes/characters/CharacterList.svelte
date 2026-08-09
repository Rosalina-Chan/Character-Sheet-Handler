<script lang="ts">
	import { slide } from "svelte/transition";
	import type { CharacterData } from "$lib/remote.svelte";
	import IconSwitch from "./IconSwitch.svelte";
	let { characters }: { characters: CharacterData[] } = $props();
</script>

<div class="char-list-container main-content">
	{#each characters as character}
		<div class="char-list-div normal-div" transition:slide>
			<div
				class="avatar normal-avatar"
				style="background-image: url('{character.avatarImg}')"
			></div>
			{#if character.displayKeys.length === 0}
				<div class="char-data">
					<div class="char-link link-underline">
						<a href="/characters/{character.id}?view">View</a>
					</div>
				</div>
			{:else if character.displayKeys.length === 1}
				<div class="char-data">
					<IconSwitch name={character.displayKeys[0].icon} />
					{character[character.displayKeys[0].data]}
					<div class="char-link link-underline">
						<a href="/characters/{character.id}?view">View</a>
					</div>
				</div>
			{:else}
				{#each character.displayKeys as { data, icon }, i}
					{#if character.displayKeys.length - i === 1}
						<div class="char-data">
							<IconSwitch name={icon} />
							{character[data]}
							<div class="char-link link-underline">
								<a href="/characters/{character.id}?view">View</a>
							</div>
						</div>
					{:else}
						<div class="char-data">
							<IconSwitch name={icon} />
							{character[data]}
						</div>
					{/if}
				{/each}
			{/if}
			<div class="char-data">
				<IconSwitch name={"source"} />
				{character.source}
				<div class="char-link link-underline">
					<a href="/characters/{character.id}?edit">Edit</a>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.normal-div {
		background-color: var(--normal-background-colour);
		/*color: var(--dark-text-colour);*/
	}

	/*.normal-div a {
		color: var(--link-light-colour);
	}
	.normal-div a:after {
		background-color: var(--link-light-colour);
	}*/

	.normal-avatar {
		background-color: var(--normal-background-icon);
	}

	.char-list-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
		justify-items: space-between;
	}

	.char-list-container .avatar {
		border-radius: 100%;
		aspect-ratio: 1/1;
		background-position: center;
		background-size: cover;
		margin-bottom: 10px;
	}

	.char-list-container .char-list-div {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 20px;
		font-size: 25px;
		border-radius: 5%;
		overflow: hidden;
	}

	.char-list-container .char-data {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.char-list-container .char-link {
		float: right;
	}

	@media (max-width: 530px) {
		.char-list-container {
			grid-template-columns: 1fr;
		}
		.char-list-container > div {
			padding: 10px;
			font-size: 20px;
		}
	}
</style>
