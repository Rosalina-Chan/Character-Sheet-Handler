<script lang="ts">
	import MenuRoundedIcon from "~icons/material-symbols/menu-rounded";
	import favicon from "$lib/assets/favicon.svg";
	import "greset/greset.css";
	import "$lib/style.css";
	let is_navbar_closed = $state(true);
	function dropMenu() {
		is_navbar_closed = !is_navbar_closed;
	}
</script>

<div class="navbar">
	<div class="content">
		<div style="display: flex; width: 100%">
			<a href="/" style="text-decoration: none"><h3>LOGO</h3></a>
			<button class="dropdown" onclick={dropMenu}
				><MenuRoundedIcon width="36px" height="36px" viewBox="0 0 24 24" /></button
			>
		</div>
		<div class="links" class:closed={is_navbar_closed}>
			<a href="/characters" style="text-decoration: none"><p>Characters</p></a>
			<a href="/assets" style="text-decoration: none"><p>Assets</p></a>
			<a href="/" style="text-decoration: none"><p>Button</p></a>
			<a href="/" style="text-decoration: none"><p>Button</p></a>
		</div>
	</div>
</div>

<style>
	.navbar {
		z-index: 999;
		position: sticky;
		top: 0;
		background-color: var(--navbar-colour);
		padding: 1rem;
		text-align: center;
	}
	.content {
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		align-items: center;
	}
	.links {
		display: flex;
		gap: 1rem;
		margin-left: auto;
	}
	.dropdown {
		margin-left: auto;
		display: none;
	}

	@media (max-width: 530px) {
		.links {
			display: flex;
			position: sticky;
			flex-direction: column;
			margin-left: auto;
			margin-right: auto;
			width: 100%;
			height: 225px;
			transition: 0.3s;
			overflow: hidden;

			padding-top: 5px;
			padding-bottom: 5px;

			margin-top: 10px;
			margin-bottom: 10px;

			border-radius: 10px;
			border-style: solid;

			background-color: var(--navbar-hover-colour);
			border-color: var(--navbar-hover-colour);
		}
		.navbar {
			flex-direction: column;
		}
		.dropdown {
			display: block;

			border-radius: 10px;
			border-style: solid;

			color: var(--navbar-text-colour);
			background-color: var(--navbar-colour);
			border-color: var(--navbar-hover-colour);
		}
		.content {
			display: block;
		}
		.closed {
			height: 0px;
			transition: 0.3s;

			padding-top: 0px;
			padding-bottom: 0px;

			margin-top: 0px;
			margin-bottom: 0px;

			border-radius: 0px;
			border-style: none;
		}
		a {
			color: var(--navbar-text-colour);
			transition: 0.3s;
			padding: 10px;
			border-radius: 20px;
		}
		a:hover {
			color: var(--navbar-text-hover-colour);
			transition: 0.3s;
			background-color: var(--navbar-hover-colour);
		}
	}

	a {
		color: var(--navbar-text-colour);
		transition: 0.3s;
		padding: 10px;
		border-radius: 20px;
	}
	a:hover {
		color: var(--navbar-text-hover-colour);
		transition: 0.3s;
		background-color: var(--navbar-hover-colour);
	}
</style>
