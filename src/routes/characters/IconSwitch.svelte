<script lang="ts">
	import TermNameIcon from "~icons/wordpress/term-name";
	import StatsIcon from "~icons/gridicons/stats";
	import ShieldIcon from "~icons/material-symbols/shield";
	import PersonIcon from "~icons/material-symbols/person";
	import BookOutlineSharpIcon from "~icons/material-symbols/book-outline-sharp";

	export const icons = {
		shield: { icon: ShieldIcon, view: "0 -2 24 24" },
		nameTag: { icon: TermNameIcon, view: "0 -2 24 24" },
		stats: { icon: StatsIcon, view: "0 -2 24 24" },
		person: { icon: PersonIcon, view: "0 -2 24 24" },
		source: { icon: BookOutlineSharpIcon, view: "0 -2 24 24" }
	};

	let { name }: { name: string } = $props();
	let Component = $derived(icons[name as keyof typeof icons].icon);
</script>

<Component
	width="20px"
	height="20px"
	aria-hidden="true"
	viewBox={icons[name as keyof typeof icons].view}
></Component>
