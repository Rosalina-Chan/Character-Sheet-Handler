<script lang="ts">
	import { getdata } from "$lib/remote.svelte";
	import TermNameIcon from "~icons/wordpress/term-name";
	import StatsIcon from "~icons/gridicons/stats";
	import ShieldIcon from "~icons/material-symbols/shield";
	import PersonIcon from "~icons/material-symbols/person";
	import CharacterList from "./CharacterList.svelte";
</script>

<h1>Welcome to Your Characters!</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h2>Recently Used Characters</h2>

<CharacterList
	characters={Object.values(getdata().characters)
		.filter((a) => a.owner === getdata().user)
		.toSorted((a, b) => b.lastAccessed - a.lastAccessed)
		.slice(0, 3)}
/>

<h3><a href="characters">See All Characters</a></h3>

<hr />

<h2>List of Characters Shared with You!</h2>
<CharacterList
	characters={Object.values(getdata().characters)
		.filter((a) => a.owner !== getdata().user)
		.toSorted((a, b) => b.lastAccessed - a.lastAccessed)
		.slice(0, 3)}
/>

<h3><a href="characters">See All Characters</a></h3>
