<script lang="ts">
	import { getdata } from "$lib/remote.svelte";
	let { data } = $props();
	let character = $derived(getdata().characters[data.characterID]);
</script>

{character.name}
