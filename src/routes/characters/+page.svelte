<script lang="ts">
	import { getdata } from "$lib/remote.svelte";
</script>

<h1>Welcome to Your Characters!</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h2>Recently Used Characters</h2>
<div class="char-list-container">
	{#each Object.values(getdata().characters)
		.toSorted((a, b) => b.lastAccessed - a.lastAccessed)
		.slice(0, 3) as character}
		<div>
			<img src={character.avatarImg} alt="avatar" width="100%" />
			<div>
				<div>{character.name}</div>
				<div>{character.class}</div>
				<div>Level {character.level}</div>
			</div>
		</div>
	{/each}
</div>
<h3><a href="characters">See All Characters</a></h3>

<h2>List of Characters Shared with You!</h2>
<div class="char-list-container">
	<div><a href="characters">Character 1</a></div>
	<div>Character 2</div>
	<div>Character 3</div>
</div>

<style>
	.char-list-container {
		display: flex;
		justify-items: space-between;
		background-color: DodgerBlue;
	}

	.char-list-container img {
		border-radius: 100%;
	}

	.char-list-container > div {
		width: 100%;
		background-color: #f1f1f1;
		margin: 10px;
		padding: 20px;
		font-size: 30px;
	}
</style>
