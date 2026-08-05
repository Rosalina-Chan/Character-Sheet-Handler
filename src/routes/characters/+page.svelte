<script lang="ts">
	import { getdata } from "$lib/remote.svelte";
	import CharacterList from "./CharacterList.svelte";
	import Buttons from "./Buttons.svelte";

	let sharedIsClosed = $state(true);
	let ownedIsClosed = $state(true);
	let favouriteIsClosed = $state(true);
</script>

<h1>Welcome to Your Characters!</h1>

<h2>Favourited Characters</h2>

<CharacterList
	characters={Object.values(getdata().characters)
		.filter((a) => a.owner === getdata().user)
		.filter((a) => a.favourited === true)
		.toSorted((a, b) => b.lastAccessed - a.lastAccessed)
		.slice(0, favouriteIsClosed ? 3 : Infinity)}
/>

<Buttons
	characters={Object.values(getdata().characters)
		.filter((a) => a.owner === getdata().user)
		.filter((a) => a.favourited)}
	bind:buttonClosed={favouriteIsClosed}
/>

<hr />

<h2>Recently Used Characters</h2>

<CharacterList
	characters={Object.values(getdata().characters)
		.filter((a) => a.owner === getdata().user)
		.toSorted((a, b) => b.lastAccessed - a.lastAccessed)
		.slice(0, ownedIsClosed ? 3 : Infinity)}
/>

<Buttons
	characters={Object.values(getdata().characters).filter((a) => a.owner === getdata().user)}
	bind:buttonClosed={ownedIsClosed}
/>

<hr />

<h2>List of Characters Shared with You!</h2>
<CharacterList
	characters={Object.values(getdata().characters)
		.filter((a) => a.owner !== getdata().user)
		.toSorted((a, b) => b.lastAccessed - a.lastAccessed)
		.slice(0, sharedIsClosed ? 3 : Infinity)}
/>

<Buttons
	characters={Object.values(getdata().characters).filter((a) => a.owner !== getdata().user)}
	bind:buttonClosed={sharedIsClosed}
/>
