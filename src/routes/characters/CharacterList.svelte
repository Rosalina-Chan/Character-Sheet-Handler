<script lang="ts">
	import { slide } from "svelte/transition";
	import TermNameIcon from "~icons/wordpress/term-name";
	import StatsIcon from "~icons/gridicons/stats";
	import ShieldIcon from "~icons/material-symbols/shield";
	import PersonIcon from "~icons/material-symbols/person";
	let { characters } = $props();
</script>

<div class="char-list-container main-content">
	{#each characters as character}
		<div class="char-list-div" transition:slide>
			<div class="avatar" style="background-image: url('{character.avatarImg}')"></div>
			<div class="char-data"><TermNameIcon height="0.8em" width="0.8em" /> {character.name}</div>
			<div class="char-data"><ShieldIcon height="0.8em" width="0.8em" /> {character.class}</div>
			<div class="char-data"><PersonIcon height="0.8em" width="0.8em" /> {character.race}</div>
			<div class="char-data">
				<StatsIcon height="0.8em" width="0.8em" /> Level {character.level}
			</div>
		</div>
	{/each}
</div>

<style>
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
		background-color: #f1f1f1;
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
