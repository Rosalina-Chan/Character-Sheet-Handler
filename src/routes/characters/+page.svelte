<script lang="ts">
	import { getdata } from "$lib/remote.svelte";
	import CharacterList from "./CharacterList.svelte";

	let sharedIsClosed = $state(true);
	let ownedIsClosed = $state(true);
</script>

<h1>Welcome to Your Characters!</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h2>Recently Used Characters</h2>

<CharacterList
	characters={Object.values(getdata().characters)
		.filter((a) => a.owner === getdata().user)
		.toSorted((a, b) => b.lastAccessed - a.lastAccessed)
		.slice(0, ownedIsClosed ? 3 : Infinity)}
/>
<div class="show-more-container">
	<button onclick={() => (ownedIsClosed = !ownedIsClosed)} class="show-more-btn"
		>Show {ownedIsClosed ? "more" : "less"}!
	</button>
</div>
<hr />

<h2>List of Characters Shared with You!</h2>
<CharacterList
	characters={Object.values(getdata().characters)
		.filter((a) => a.owner !== getdata().user)
		.toSorted((a, b) => b.lastAccessed - a.lastAccessed)
		.slice(0, sharedIsClosed ? 3 : Infinity)}
/>

<button onclick={() => (sharedIsClosed = !sharedIsClosed)}
	>Show {sharedIsClosed ? "more" : "less"}!</button
>

<style>
	.show-more-btn {
		margin-top: 15px;
		margin-bottom: 15px;
		padding-top: 15px;
		padding-bottom: 15px;
		padding-left: 50px;
		padding-right: 50px;
	}
	.show-more-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
